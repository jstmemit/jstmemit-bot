const VALID_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml',
    'image/bmp',
    'image/tiff'
];

const VALID_IMAGE_EXTENSIONS = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.webp',
    '.svg',
    '.bmp',
    '.tiff'
];

const stripQuery = (u) => u.split('?')[0];

const meta = (html, key) => {
    const re = new RegExp(
        `<meta[^>]+(?:property|name)=['"]${key}['"][^>]+content=['"]([^'"]+)['"]`,
        'i'
    );
    const m = html.match(re);
    return m ? m[1].replace(/&amp;/g, '&') : null;
};

const first = (arr) => arr.find(Boolean);

async function resolveTenor(pageUrl) {
    const res = await fetch(pageUrl, {
        headers: {'User-Agent': 'Mozilla/5.0 (ImageValidator)'}
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const html = await res.text();
    const direct = first([
        meta(html, 'twitter:image'),
        meta(html, 'twitter:image:src'),
        meta(html, 'og:image'),
        meta(html, 'og:image:secure_url')
    ]);

    if (!direct) throw new Error('No media tags found in Tenor page');
    return direct;
}

const TENOR_CDN_RE =
    /^https?:\/\/(?:media\d*\.tenor|c\.tenor)\.com\//i;

export async function validateImage(
    originalUrl,
    {
        timeout = 5000,
        checkExtension = true,
        verifyContent = true
    } = {}
) {
    let url = originalUrl;

    if (url.includes('tenor.com/view/')) {
        try {
            url = await resolveTenor(url);
        } catch (e) {
            return {isValid: false, url, reason: e.message};
        }
    }

    const isTenorFile = TENOR_CDN_RE.test(url);

    if (checkExtension) {
        const ok = VALID_IMAGE_EXTENSIONS.some((ext) =>
            stripQuery(url).toLowerCase().endsWith(ext)
        );
        if (!ok) {
            return {isValid: false, url, reason: 'Invalid file extension'};
        }
    }

    if (verifyContent && !isTenorFile) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeout);

        const res = await fetch(url, {
            method: 'HEAD',
            signal: controller.signal,
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 ' +
                    '(KHTML, like Gecko) Chrome/86.0.4240.77 Safari/537.36'
            }
        });

        clearTimeout(timer);

        if (!res.ok) {
            return {
                isValid: false,
                url,
                reason: `HTTP ${res.status}: ${res.statusText}`
            };
        }

        const type = (res.headers.get('content-type') || '').toLowerCase();
        const validType = VALID_IMAGE_TYPES.some((t) =>
            type.startsWith(t)
        );
        if (!validType) {
            return {
                isValid: false,
                url,
                reason: `Invalid content-type: ${type}`
            };
        }

        return {
            isValid: true,
            url,
            contentType: type,
            size: res.headers.get('content-length')
        };
    }

    return {
        isValid: true,
        url,
        reason: isTenorFile
            ? 'Tenor'
            : 'Extension check passed'
    };
}