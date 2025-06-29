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
    '.jpg', '.jpeg', '.png', '.gif',
    '.webp', '.svg', '.bmp', '.tiff'
];

export const validateImage = async (url, options = {}) => {
    const {
        timeout = 5000,
        checkExtension = true,
        verifyContent = true
    } = options;

    try {
        // Quick extension check first
        if (checkExtension) {
            const hasValidExtension = VALID_IMAGE_EXTENSIONS.some(ext =>
                url.toLowerCase().includes(ext)
            );
            if (!hasValidExtension) {
                return {isValid: false, reason: 'Invalid file extension'};
            }
        }

        // Check content-type header with HEAD request
        if (verifyContent) {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeout);

            try {
                const response = await fetch(url, {
                    method: 'HEAD',
                    signal: controller.signal,
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (compatible; ImageValidator/1.0)'
                    }
                });

                clearTimeout(timeoutId);

                if (!response.ok) {
                    return {
                        isValid: false,
                        reason: `HTTP ${response.status}: ${response.statusText}`
                    };
                }

                const contentType = response.headers.get('content-type');
                if (!contentType || !VALID_IMAGE_TYPES.includes(contentType.toLowerCase())) {
                    return {
                        isValid: false,
                        reason: `Invalid content-type: ${contentType}`
                    };
                }

                return {
                    isValid: true,
                    contentType,
                    size: response.headers.get('content-length')
                };

            } catch (error) {
                clearTimeout(timeoutId);

                if (error.name === 'AbortError') {
                    return {isValid: false, reason: 'Request timeout'};
                }

                return {isValid: false, reason: error.message};
            }
        }

        return {isValid: true, reason: 'Extension check passed'};

    } catch (error) {
        return {isValid: false, reason: error.message};
    }
};