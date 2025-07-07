import {afterEach, beforeEach, vi} from 'vitest'

vi.mock('#src/database/initializePool.js', () => ({
    pool: {
        getConnection: vi.fn()
    }
}))

export const mockConnection = {
    beginTransaction: vi.fn(),
    query: vi.fn(),
    commit: vi.fn(),
    rollback: vi.fn(),
    release: vi.fn()
}

export const mockChannelSettings = {
    channel_id: '123456789',
    is_enabled: true,
    frequency: 60,
    enabled_random_memes: true,
    delete_messages_after: 3600,
    use_user_images: false,
    language: 'english',
    replace_mentions: true,
    watermarkLogo: true,
    linked_channel: '987654321'
}

beforeEach(async () => {
    vi.clearAllMocks()

    const {pool} = await import('#src/database/initializePool.js')
    pool.getConnection.mockResolvedValue(mockConnection)
})

afterEach(() => {
    vi.clearAllMocks()
    vi.clearAllTimers()
    vi.useRealTimers()
})