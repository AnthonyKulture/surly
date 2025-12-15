/**
 * Simple in-memory rate limiter for API routes
 * Tracks requests by IP address
 */

interface RateLimitEntry {
    count: number;
    resetTime: number;
}

// Store in memory (will reset on server restart)
const rateLimitStore = new Map<string, RateLimitEntry>();

const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes in milliseconds
const MAX_REQUESTS = 10; // 10 requests per window

/**
 * Cleans up expired entries from the store
 */
function cleanupExpiredEntries() {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
        if (now > entry.resetTime) {
            rateLimitStore.delete(key);
        }
    }
}

/**
 * Checks if a request should be rate limited
 * @param identifier - Unique identifier (usually IP address)
 * @returns Object with isAllowed flag and remaining requests
 */
export function checkRateLimit(identifier: string): {
    isAllowed: boolean;
    remaining: number;
    resetTime: number;
} {
    // Clean up old entries periodically
    if (Math.random() < 0.1) { // 10% chance on each call
        cleanupExpiredEntries();
    }

    const now = Date.now();
    const entry = rateLimitStore.get(identifier);

    // No entry exists - create new one
    if (!entry) {
        rateLimitStore.set(identifier, {
            count: 1,
            resetTime: now + RATE_LIMIT_WINDOW,
        });
        return {
            isAllowed: true,
            remaining: MAX_REQUESTS - 1,
            resetTime: now + RATE_LIMIT_WINDOW,
        };
    }

    // Entry exists but expired - reset it
    if (now > entry.resetTime) {
        rateLimitStore.set(identifier, {
            count: 1,
            resetTime: now + RATE_LIMIT_WINDOW,
        });
        return {
            isAllowed: true,
            remaining: MAX_REQUESTS - 1,
            resetTime: now + RATE_LIMIT_WINDOW,
        };
    }

    // Entry exists and still valid - check count
    if (entry.count >= MAX_REQUESTS) {
        return {
            isAllowed: false,
            remaining: 0,
            resetTime: entry.resetTime,
        };
    }

    // Increment count
    entry.count++;
    return {
        isAllowed: true,
        remaining: MAX_REQUESTS - entry.count,
        resetTime: entry.resetTime,
    };
}

/**
 * Resets rate limit for an identifier (useful for testing)
 */
export function resetRateLimit(identifier: string): void {
    rateLimitStore.delete(identifier);
}
