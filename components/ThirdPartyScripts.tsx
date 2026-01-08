"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export function ThirdPartyScripts() {
    const [canLoadBrevo, setCanLoadBrevo] = useState(false);

    // Removed global stub effect to avoid conflicts
    // Initialization will happen strictly when consent is granted below

    useEffect(() => {
        const handleAxeptioUpdate = (e: any) => {
            // Check for 'brevo' consent in the event detail
            if (e.detail && e.detail.brevo) {
                setCanLoadBrevo(true);
            } else {
                setCanLoadBrevo(false);
            }
        };

        window.addEventListener("axeptio_update", handleAxeptioUpdate);

        return () => {
            window.removeEventListener("axeptio_update", handleAxeptioUpdate);
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

            {/* 1. Init: Brevo Globals - ALWAYS LOADED to prevent errors if Axeptio checks it */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.BrevoConversationsID = '6814dc6c0c14195d74019e8e';
                        window.BrevoConversations = window.BrevoConversations || function () {
                            (window.BrevoConversations.q = window.BrevoConversations.q || []).push(arguments);
                        };
                    `,
                }}
            />

            {/* Brevo - Only load if consented */}
            {canLoadBrevo && (
                <>
                    {/* DIAGNOSTIC: Commenting out manual loading to check if Axeptio auto-loads it */}
                    {/*
                    <Script
                        id="brevo-script"
                        strategy="lazyOnload"
                        src="https://conversations-widget.brevo.com/brevo-conversations.js"
                    />
                    */}
                </>
            )}
        </>
    );
}
