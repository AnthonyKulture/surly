// Type definitions for tarteaucitron.js
declare const tarteaucitron: {
    init: (config: {
        privacyUrl?: string;
        hashtag?: string;
        cookieName?: string;
        orientation?: "top" | "middle" | "bottom";
        groupServices?: boolean;
        showAlertSmall?: boolean;
        cookieslist?: boolean;
        closePopup?: boolean;
        showIcon?: boolean;
        iconPosition?: "BottomRight" | "BottomLeft" | "TopRight" | "TopLeft";
        adblocker?: boolean;
        DenyAllCta?: boolean;
        AcceptAllCta?: boolean;
        highPrivacy?: boolean;
        handleBrowserDNTRequest?: boolean;
        removeCredit?: boolean;
        moreInfoLink?: boolean;
        useExternalCss?: boolean;
        readmoreLink?: string;
        mandatory?: boolean;
        showDetailsOnClick?: boolean;
        serviceDefaultState?: "wait" | "true" | "false";
        cookieslistEmbed?: boolean;
        alwaysNeedConsent?: boolean;

        // Google Consent Mode
        googleConsentMode?: boolean;

        // Autres options
        pianoConsentModeEssential?: boolean;
        pianoConsentMode?: boolean;
        bingConsentMode?: boolean;
        softConsentMode?: boolean;
        dataLayer?: boolean;
        serverSide?: boolean;
        partnersList?: boolean;
        useExternalJs?: boolean;
        mandatoryCta?: boolean;
    }) => void;
    user: {
        gtagUa?: string;
        gtagCrossdomain?: string[];
        gtagMore?: () => void;
    };
    job?: string[];
};

interface Window {
    tarteaucitron?: typeof tarteaucitron;
    dataLayer: any[];
    gtag: (...args: any[]) => void;
}
