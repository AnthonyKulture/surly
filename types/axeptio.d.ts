
interface AxeptioSettings {
    clientId: string;
    cookiesVersion: string;
    googleConsentMode?: {
        default: {
            analytics_storage: "denied" | "granted";
            ad_storage: "denied" | "granted";
            ad_user_data: "denied" | "granted";
            ad_personalization: "denied" | "granted";
            wait_for_update: number;
        };
    };
}

interface Window {
    axeptioSettings: AxeptioSettings;
}
