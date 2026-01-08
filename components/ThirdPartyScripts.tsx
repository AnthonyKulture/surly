"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export function ThirdPartyScripts() {
    // Suppress noisy third-party errors (Axeptio/Brevo compatibility issues)
    useEffect(() => {
        const originalError = console.error;
        console.error = (...args) => {
            if (args[0] && typeof args[0] === 'string' && args[0].includes('Dropped events')) {
                // Suppress "Dropped events" error from Brevo/Axeptio
                return;
            }
            originalError.apply(console, args);
        };

        return () => {
            console.error = originalError;
        };
    }, []);

    return (
        <>
            {/* Axeptio Configuration */}
            <Script id="axeptio-settings" strategy="afterInteractive">
                {`
          window.axeptioSettings = {
            clientId: "690e0942b48e4a03c7b9b3f8",
            cookiesVersion: "1dfd07d5-8c81-4f7c-8d76-dffc0f3160d3",
            googleConsentMode: {
              default: {
                analytics_storage: "denied",
                ad_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied",
                wait_for_update: 500
              }
            }
          };
        `}
            </Script>
            {/* Axeptio SDK */}
            <Script
                id="axeptio-script"
                strategy="afterInteractive"
                src="//static.axept.io/sdk.js"
            />

        </>
    );
}
