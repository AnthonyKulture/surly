import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { IntlErrorCode } from 'next-intl';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
        onError(error) {
            if (error.code === IntlErrorCode.MISSING_MESSAGE) {
                // Missing translations are expected during development
                console.warn(error.message);
            } else {
                console.warn('next-intl error:', error.message);
            }
        },
        getMessageFallback({ namespace, key, error }) {
            const path = [namespace, key].filter(Boolean).join('.');
            if (error.code === IntlErrorCode.MISSING_MESSAGE) {
                return '';
            }
            return path;
        }
    };
});
