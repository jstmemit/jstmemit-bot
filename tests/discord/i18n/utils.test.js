import {describe, expect, test, vi} from 'vitest'
import {getLanguageTranslations, t} from '#src/discord/i18n/utils.js'

vi.mock('#src/discord/i18n/locale.js', () => ({
    locale: {
        english: {
            hello: 'Hello',
            bye: 'Goodbye',
            greet: 'Hello, {{name}}!',
            partial: 'Only {{foo}} here'
        },
        spanish: {
            hello: '¡Hola!',
            greet: '¡Hola, {{name}}!'
        }
    }
}))

describe('t()', () => {
    test('returns the translation in the requested language', () => {
        expect(t('hello', 'spanish')).toBe('¡Hola!')
    })

    test('falls back to english if the language is unsupported', () => {
        expect(t('hello', 'french')).toBe('Hello')
    })

    test('falls back to english if the key is missing in the target language', () => {
        expect(t('bye', 'spanish')).toBe('Goodbye')
    })

    test('returns original english if no translation is available', () => {
        expect(t('does_not_exist', 'english')).toBe('does_not_exist')
        expect(t('does_not_exist', 'spanish')).toBe('does_not_exist')
    })

    test('replaces placeholders with variables', () => {
        expect(t('greet', 'english', {name: 'Alice'})).toBe('Hello, Alice!')
        expect(t('greet', 'spanish', {name: 'Bob'})).toBe('¡Hola, Bob!')
    })

    test('leaves unreplaced placeholders intact if variable is missing', () => {
        expect(t('partial', 'english', {})).toBe('Only {{foo}} here')
    })
})

describe('getLanguageTranslations()', () => {
    test('returns the full translations object for a supported language', () => {
        expect(getLanguageTranslations('spanish')).toEqual({
            hello: '¡Hola!',
            greet: '¡Hola, {{name}}!'
        })
    })

    test('falls back to english object if the language is unsupported', () => {
        expect(getLanguageTranslations('german')).toEqual({
            hello: 'Hello',
            bye: 'Goodbye',
            greet: 'Hello, {{name}}!',
            partial: 'Only {{foo}} here'
        })
    })

})