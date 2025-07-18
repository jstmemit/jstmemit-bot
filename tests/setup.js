import {afterEach, beforeEach, vi} from 'vitest'

export const mockConnection = {
    beginTransaction: vi.fn(),
    query: vi.fn(),
    commit: vi.fn(),
    rollback: vi.fn(),
    release: vi.fn(),
}

export const selectBuilder = {
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    limit: vi.fn(() => Promise.resolve([])),
}

export const mockDb = {
    select: vi.fn(() => selectBuilder),
    insert: vi.fn(() => ({values: vi.fn(() => Promise.resolve())})),
    update: vi.fn(() => ({set: vi.fn(() => Promise.resolve())})),
    delete: vi.fn(() => ({
        where: vi.fn(() => Promise.resolve()),
        from: vi.fn(() => Promise.resolve()),
    })),
    fn: {
        count: vi.fn(() => 'COUNT(*)'),
    },
}

vi.mock('#src/database/initializePool.js', () => ({
    pool: {
        getConnection: vi.fn(),
    },
    db: mockDb,
}))

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
    linked_channel: '987654321',
}

vi.mock('posthog-node', () => ({
    PostHog: vi.fn(() => ({
        capture: vi.fn(),
        flush: vi.fn(),
        identify: vi.fn(),
        shutdown: vi.fn(),
    })),
}))

vi.mock('@napi-rs/canvas', () => ({
    createCanvas: vi.fn(() => ({
        getContext: vi.fn(() => ({
            fillRect: vi.fn(),
            fillText: vi.fn(),
            drawImage: vi.fn(),
            save: vi.fn(),
            restore: vi.fn(),
            translate: vi.fn(),
            scale: vi.fn(),
            rotate: vi.fn(),
            clearRect: vi.fn(),
            beginPath: vi.fn(),
            closePath: vi.fn(),
            moveTo: vi.fn(),
            lineTo: vi.fn(),
            arc: vi.fn(),
            fill: vi.fn(),
            stroke: vi.fn(),
            measureText: vi.fn(() => ({width: 100})),
            font: '',
            fillStyle: '',
            strokeStyle: '',
            lineWidth: 1,
        })),
        toBuffer: vi.fn(() => Buffer.from('mock-image-data')),
        toDataURL: vi.fn(() => 'data:image/png;base64,mock-data'),
        width: 800,
        height: 600,
    })),
    Image: vi.fn(() => ({
        onload: null,
        onerror: null,
        src: '',
        width: 0,
        height: 0,
    })),
    loadImage: vi.fn(() => Promise.resolve({width: 100, height: 100})),
}))

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