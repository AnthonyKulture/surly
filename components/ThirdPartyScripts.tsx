"use client";

import Script from "next/script";

export function ThirdPartyScripts() {
  return (
    <>
      {/* Axeptio Configuration */}
      {/* Axeptio Configuration - Standard script for immediate init */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
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
          `,
        }}
      />
      {/* Axeptio SDK */}
      <Script
        id="axeptio-script"
        strategy="afterInteractive"
        src="//static.axept.io/sdk.js"
      />

      {/* Brevo Conversations Initialization */}

    </>
  );
}
