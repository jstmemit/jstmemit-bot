import {beforeEach, describe, expect, test, vi} from 'vitest'
import axios from 'axios'
import {calculateWeights, getAnalyticsData} from '#src/analytics/likesAndDislikes.js'

vi.mock('axios')
vi.mock('dotenv', () => ({
    default: {
        config: () => ({
            parsed: {
                POSTHOG_PROJECT_ID: 'test-project-id',
                POSTHOG_WRITE_KEY: 'test-api-key'
            }
        })
    }
}))

describe('getAnalyticsData', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    test('fetches and processes analytics data successfully', async () => {
        const mockLikedResponse = {
            data: {
                results: [
                    {properties: {template: 'meme1'}},
                    {properties: {template: 'meme1'}},
                    {properties: {template: 'meme2'}}
                ],
                next: null
            }
        }

        const mockDislikedResponse = {
            data: {
                results: [
                    {properties: {template: 'meme1'}},
                    {properties: {template: 'meme3'}}
                ],
                next: null
            }
        }

        axios.get
            .mockResolvedValueOnce(mockLikedResponse)
            .mockResolvedValueOnce(mockDislikedResponse)

        const result = await getAnalyticsData(30)

        expect(result).toEqual({
            liked: [['meme1', 2], ['meme2', 1]],
            disliked: [['meme1', 1], ['meme3', 1]]
        })

        expect(axios.get).toHaveBeenCalledTimes(2)
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining('event=meme_liked'),
            {
                headers: {'Authorization': 'Bearer test-api-key'}
            }
        )
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining('event=meme_disliked'),
            {
                headers: {'Authorization': 'Bearer test-api-key'}
            }
        )
    })

    test('handles pagination correctly', async () => {
        const mockFirstPage = {
            data: {
                results: [
                    {properties: {template: 'meme1'}}
                ],
                next: 'https://eu.i.posthog.com/api/projects/test-project-id/events/?event=meme_liked&after=2024-01-01&limit=100&offset=100'
            }
        }

        const mockSecondPage = {
            data: {
                results: [
                    {properties: {template: 'meme2'}}
                ],
                next: null
            }
        }

        const mockDislikedResponse = {
            data: {
                results: [],
                next: null
            }
        }

        axios.get
            .mockResolvedValueOnce(mockFirstPage)
            .mockResolvedValueOnce(mockSecondPage)
            .mockResolvedValueOnce(mockDislikedResponse)

        const result = await getAnalyticsData()

        expect(result).toEqual({
            liked: [['meme1', 1], ['meme2', 1]],
            disliked: []
        })

        expect(axios.get).toHaveBeenCalledTimes(3)
    })

    test('handles events without template property', async () => {
        const mockLikedResponse = {
            data: {
                results: [
                    {properties: {template: 'meme1'}},
                    {properties: {}},
                    {properties: {template: null}},
                    {properties: {template: 'meme2'}}
                ],
                next: null
            }
        }

        const mockDislikedResponse = {
            data: {
                results: [],
                next: null
            }
        }

        axios.get
            .mockResolvedValueOnce(mockLikedResponse)
            .mockResolvedValueOnce(mockDislikedResponse)

        const result = await getAnalyticsData()

        expect(result).toEqual({
            liked: [['meme1', 1], ['meme2', 1]],
            disliked: []
        })
    })

    test('handles API errors gracefully', async () => {
        axios.get.mockRejectedValue(new Error('API Error'))

        const result = await getAnalyticsData()

        expect(result).toEqual({
            liked: [],
            disliked: []
        })
    })

    test('uses correct date calculation', async () => {
        const mockDate = new Date('2024-01-15T10:00:00Z')
        vi.setSystemTime(mockDate)

        axios.get
            .mockResolvedValueOnce({data: {results: [], next: null}})
            .mockResolvedValueOnce({data: {results: [], next: null}})

        await getAnalyticsData(7)

        const expectedDate = new Date('2024-01-08T10:00:00Z').toISOString()
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining(`after=${expectedDate}`),
            expect.any(Object)
        )

        vi.useRealTimers()
    })
})

describe('calculateWeights', () => {
    test('calculates weights correctly with mixed data', () => {
        const analyticsData = {
            liked: [['meme1', 80], ['meme2', 20], ['meme3', 0]],
            disliked: [['meme1', 20], ['meme2', 80], ['meme4', 10]]
        }

        const result = calculateWeights(analyticsData)

        expect(result.meme1).toBeCloseTo(0.92, 2)

        expect(result.meme2).toBeCloseTo(0.38, 2)

        expect(result.meme3).toBe(0.3)

        expect(result.meme4).toBeCloseTo(0.15, 2)
    })

    test('handles edge case with only liked events', () => {
        const analyticsData = {
            liked: [['meme1', 50]],
            disliked: []
        }

        const result = calculateWeights(analyticsData)

        expect(result.meme1).toBeCloseTo(0.95, 2)
    })

    test('handles edge case with only disliked events', () => {
        const analyticsData = {
            liked: [],
            disliked: [['meme1', 30]]
        }

        const result = calculateWeights(analyticsData)

        expect(result.meme1).toBeCloseTo(0.2, 2)
    })

    test('handles empty analytics data', () => {
        const analyticsData = {
            liked: [],
            disliked: []
        }

        const result = calculateWeights(analyticsData)

        expect(result).toEqual({})
    })

    test('applies volume boost correctly', () => {
        const analyticsData = {
            liked: [['lowVolume', 5], ['highVolume', 200]],
            disliked: [['lowVolume', 5], ['highVolume', 100]]
        }

        const result = calculateWeights(analyticsData)

        expect(result.highVolume).toBeGreaterThan(result.lowVolume)
    })

    test('handles calculation errors gracefully', () => {
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {
        })

        const result = calculateWeights(null)

        expect(result).toEqual({})
        expect(consoleSpy).toHaveBeenCalledWith('Error calculating weights:', expect.any(Error))

        consoleSpy.mockRestore()
    })

    test('ensures minimum weight is 0.05', () => {
        const analyticsData = {
            liked: [['meme1', 0]],
            disliked: [['meme1', 1]]
        }

        const result = calculateWeights(analyticsData)

        expect(result.meme1).toBeCloseTo(0.06, 2)
    })

    test('ensures maximum weight is 0.95', () => {
        const analyticsData = {
            liked: [['meme1', 1000]],
            disliked: [['meme1', 0]]
        }

        const result = calculateWeights(analyticsData)

        expect(result.meme1).toBe(0.95)
    })
})