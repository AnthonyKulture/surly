"use client";

import Script from "next/script";
import { useEffect } from "react";

export function ThirdPartyScripts() {
  useEffect(() => {
    // Filtrer l'erreur "Dropped events" d'Axeptio
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === "string" &&
        args[0].includes("Dropped events")
      ) {
        return; // Ignorer cette erreur spécifique
      }
      originalError.apply(console, args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return (
    <>
      <Script id="axeptio-integration" strategy="afterInteractive">
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
          
          (function(d, s) {
            var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
            e.async = true; e.src = "https://static.axept.io/sdk.js";
            t.parentNode.insertBefore(e, t);
          })(document, "script");
        `}
      </Script>
    </>
  );
}
