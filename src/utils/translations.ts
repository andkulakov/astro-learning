import * as enJson from '../locales/en.json';
import * as esJson from '../locales/es.json';
import * as frJson from '../locales/fr.json';
import * as deJson from '../locales/de.json';

const translations = {
    en: enJson,
    es: esJson,
    fr: frJson,
    de: deJson,
};

const getByPath = (path: string, obj): any => (
    path.split('.').reduce((p, c)=> p && p[c] || null, obj)
)

export const languages = Object.keys(translations)

export function t(path: string, lang: string): string {
    const translation = translations[lang] || {}

    return getByPath(path, translation) || ''
}
