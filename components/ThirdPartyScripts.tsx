"use client";

import Script from "next/script";

export function ThirdPartyScripts() {
  return (
    <>
      {/* Tarteaucitron.js - Gestion des cookies RGPD */}
      <Script
        src="/tarteaucitron/tarteaucitron.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          if (typeof tarteaucitron !== 'undefined') {
            // @ts-ignore
            tarteaucitron.init({
              "privacyUrl": "/politique-cookies",

              "hashtag": "#tarteaucitron",
              "cookieName": "tarteaucitron",

              "orientation": "bottom",

              "groupServices": true,
              "showDetailsOnClick": true,
              "serviceDefaultState": "wait",

              "showAlertSmall": false,
              "cookieslist": false,
              "cookieslistEmbed": false,

              "closePopup": false,

              "showIcon": true,
              "iconPosition": "BottomRight",

              "adblocker": false,

              "DenyAllCta": true,
              "AcceptAllCta": true,
              "highPrivacy": true,
              "alwaysNeedConsent": false,

              "handleBrowserDNTRequest": false,

              "removeCredit": true,
              "moreInfoLink": true,

              "useExternalCss": false,
              "useExternalJs": false,

              "readmoreLink": "/politique-cookies",

              "mandatory": false,
              "mandatoryCta": false,

              "googleConsentMode": true,
              "bingConsentMode": false,
              "pianoConsentMode": false,
              "pianoConsentModeEssential": false,
              "softConsentMode": false,

              "dataLayer": false,
              "serverSide": false,

              "partnersList": false
            });

            // Configuration Google Analytics
            // @ts-ignore
            tarteaucitron.user.gtagUa = 'G-E9FMCYSQH2';
            // @ts-ignore
            tarteaucitron.user.gtagMore = function () {
              /* Configuration gtag optionnelle */
            };

            // Activer le service Google Analytics (gtag)
            // @ts-ignore
            (tarteaucitron.job = tarteaucitron.job || []).push('gtag');

            console.log('Tarteaucitron initialized successfully');
          }
        }}
      />

      {/* Styles personnalisés Surly - Design épuré et moderne */}
      <style jsx global>{`
        /* Police système */
        #tarteaucitronRoot,
        #tarteaucitronRoot * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
        }

        /* Bannière principale - Design blanc épuré */
        #tarteaucitronAlertBig {
          background: #ffffff !important;
          border: 1px solid rgba(0, 94, 83, 0.12) !important;
          border-radius: 16px !important;
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12) !important;
          padding: 28px 32px !important;
          margin: 16px !important;
          max-width: 520px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          animation: slideUpBanner 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        @keyframes slideUpBanner {
          from {
            transform: translateX(-50%) translateY(60px);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }

        /* Logo Surly rond en haut à gauche */
        #tarteaucitronAlertBig::before {
          content: "";
          position: absolute;
          top: 16px;
          left: 20px;
          width: 40px;
          height: 40px;
          background-image: url('/surly-logo-round.png');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          border-radius: 50%;
        }

        /* Ajuster le padding pour faire de la place au logo */
        #tarteaucitronAlertBig #tarteaucitronDisclaimerAlert {
          margin-top: 32px !important;
        }

        /* Textes - Couleur sombre */
        #tarteaucitronAlertBig #tarteaucitronDisclaimerAlert,
        #tarteaucitronAlertBig strong {
          color: #1a1a1a !important;
          font-size: 14px !important;
          line-height: 1.6 !important;
          font-weight: 400 !important;
        }

        #tarteaucitronAlertBig strong {
          font-weight: 600 !important;
        }

        /* Container des boutons */
        #tarteaucitronAlertBig #tarteaucitronPrivacyUrlDialog {
          margin-top: 24px !important;
          display: flex !important;
          flex-wrap: wrap !important;
          gap: 12px !important;
        }

        /* Boutons - Style moderne et épuré */
        #tarteaucitronAlertBig button {
          border-radius: 8px !important;
          font-weight: 600 !important;
          font-size: 14px !important;
          padding: 11px 22px !important;
          border: none !important;
          cursor: pointer !important;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
          text-transform: none !important;
          letter-spacing: 0.2px !important;
          box-sizing: border-box !important;
          max-width: 100% !important;
        }

        /* Bouton Tout accepter - Vert Surly */
        #tarteaucitronAlertBig #tarteaucitronPersonalize2 {
          background: #005e53 !important;
          color: #ffffff !important;
          box-shadow: 0 2px 8px rgba(0, 94, 83, 0.2) !important;
        }

        #tarteaucitronAlertBig #tarteaucitronPersonalize2:hover {
          background: #004940 !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(0, 94, 83, 0.3) !important;
        }

        /* Bouton Tout refuser - Style subtil */
        #tarteaucitronAlertBig #tarteaucitronAllDenied2 {
          background: transparent !important;
          color: #005e53 !important;
          border: 1px solid rgba(0, 94, 83, 0.3) !important;
        }

        #tarteaucitronAlertBig #tarteaucitronAllDenied2:hover {
          background: rgba(0, 94, 83, 0.05) !important;
          border-color: rgba(0, 94, 83, 0.5) !important;
          transform: translateY(-1px) !important;
        }

        /* Bouton Personnaliser - Lien discret */
        #tarteaucitronAlertBig #tarteaucitronCloseAlert {
          background: transparent !important;
          color: rgba(0, 0, 0, 0.5) !important;
          text-decoration: underline !important;
          padding: 8px 12px !important;
          font-size: 13px !important;
          font-weight: 500 !important;
        }

        #tarteaucitronAlertBig #tarteaucitronCloseAlert:hover {
          color: #005e53 !important;
        }

        /* Icône cookie - Design moderne blanc */
        #tarteaucitronIcon {
          background: #ffffff !important;
          border: 1px solid rgba(0, 94, 83, 0.15) !important;
          border-radius: 12px !important;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1) !important;
          width: 52px !important;
          height: 52px !important;
          bottom: 20px !important;
          right: 20px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        #tarteaucitronIcon:hover {
          transform: scale(1.08) !important;
          box-shadow: 0 6px 24px rgba(0, 94, 83, 0.2) !important;
          border-color: rgba(0, 94, 83, 0.3) !important;
        }

        /* Corriger le logo Tarteaucitron aplati */
        #tarteaucitronIcon button {
          width: 100% !important;
          height: 100% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0 !important;
        }

        #tarteaucitronIcon svg,
        #tarteaucitronIcon img {
          max-width: 28px !important;
          max-height: 28px !important;
          width: auto !important;
          height: auto !important;
          object-fit: contain !important;
        }

        /* Liens */
        #tarteaucitronAlertBig a {
          color: #005e53 !important;
          text-decoration: underline !important;
          text-underline-offset: 2px !important;
          transition: color 0.2s ease !important;
        }

        #tarteaucitronAlertBig a:hover {
          color: #004940 !important;
        }

        /* Z-index */
        #tarteaucitronRoot,
        #tarteaucitronAlertBig,
        #tarteaucitronIcon {
          z-index: 9999999 !important;
        }

        /* Responsive Mobile - FIX centrage et logo */
        @media (max-width: 768px) {
          #tarteaucitronAlertBig {
            margin: 0 auto 16px auto !important;
            padding: 56px 20px 20px 20px !important;
            max-width: none !important;
            width: calc(100% - 32px) !important;
            left: 16px !important;
            right: 16px !important;
            transform: none !important;
            box-sizing: border-box !important;
          }

          @keyframes slideUpBanner {
            from {
              transform: translateY(60px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          /* Logo centré en haut sur mobile */
          #tarteaucitronAlertBig::before {
            top: 12px;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 36px;
            height: 36px;
          }

          #tarteaucitronAlertBig #tarteaucitronDisclaimerAlert {
            margin-top: 0 !important;
            font-size: 13px !important;
            text-align: center !important;
          }

          #tarteaucitronAlertBig button {
            font-size: 13px !important;
            padding: 10px 16px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          #tarteaucitronAlertBig #tarteaucitronPrivacyUrlDialog {
            display: block !important; /* Force block pour gérer les marges manuellement */
            height: auto !important;
          }

          /* Force l'espace entre les boutons sur mobile via margin */
          #tarteaucitronAlertBig button {
            display: block !important;
            width: 100% !important;
            margin-bottom: 12px !important; /* Espace garanti entre les boutons */
            font-size: 13px !important;
            padding: 12px 16px !important;
            box-sizing: border-box !important;
          }

          /* Enlever la marge du dernier élément pour éviter espace inutile en bas */
          #tarteaucitronAlertBig _:last-child {
            margin-bottom: 0 !important;
          }

          /* CORRECTION DU PANNEAU DE PERSONNALISATION SUR MOBILE */
          /* Cibler le conteneur principal du manager (le panneau plein écran) */
          #tarteaucitron {
             padding: 20px !important; 
             box-sizing: border-box !important;
          }

          /* Le conteneur interne des services */
          #tarteaucitronServices {
            margin-top: 50px !important; /* Pousser le contenu vers le bas pour laisser place au bouton fermer */
          }
          
          /* Décoller le bouton fermer en haut à droite et le mettre au-dessus de tout */
          #tarteaucitronClosePanel {
             position: fixed !important;
             top: 15px !important;
             right: 15px !important;
             margin: 0 !important;
             z-index: 2147483647 !important; /* Toujours au-dessus (Max Z-Index) */
             width: auto !important;
             height: auto !important;
             padding: 8px 12px !important;
             background: #005e53 !important;
             color: white !important;
             box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
          }

          #tarteaucitronIcon {
            width: 46px !important;
            height: 46px !important;
            bottom: 16px !important;
            right: 16px !important;
          }
        }

        /* Responsive Tablette */
        @media (min-width: 769px) and (max-width: 1024px) {
          #tarteaucitronAlertBig {
            max-width: 480px !important;
          }
        }

        /* ===== PANNEAU DE PERSONNALISATION ===== */
        
        /* Panel principal */
        #tarteaucitronServices {
          border-radius: 12px !important;
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15) !important;
          border: 1px solid rgba(0, 94, 83, 0.12) !important;
        }

        /* Boutons Autoriser/Interdire dans le panneau - Remplacer jaune par vert */
        .tarteaucitronAllow,
        #tarteaucitronServices .tarteaucitronAllow {
          background: #005e53 !important;
          color: #ffffff !important;
          border: none !important;
        }

        .tarteaucitronAllow:hover,
        #tarteaucitronServices .tarteaucitronAllow:hover {
          background: #004940 !important;
        }

        .tarteaucitronDeny,
        #tarteaucitronServices .tarteaucitronDeny {
          background: transparent !important;
          color: #005e53 !important;
          border: 1px solid rgba(0, 94, 83, 0.3) !important;
        }

        .tarteaucitronDeny:hover,
        #tarteaucitronServices .tarteaucitronDeny:hover {
          background: rgba(0, 94, 83, 0.05) !important;
          border-color: rgba(0, 94, 83, 0.5) !important;
        }

        /* Bouton fermer le panneau */
        #tarteaucitronClosePanel {
          background: #005e53 !important;
          color: #ffffff !important;
          border-radius: 8px !important;
        }

        #tarteaucitronClosePanel:hover {
          background: #004940 !important;
        }

        /* Boutons du header du panel */
        #tarteaucitronManager #tarteaucitronAllAllowed,
        #tarteaucitronManager #tarteaucitronAllDenied {
          border-radius: 8px !important;
        }

        #tarteaucitronManager #tarteaucitronAllAllowed {
          background: #005e53 !important;
          color: #ffffff !important;
        }

        #tarteaucitronManager #tarteaucitronAllAllowed:hover {
          background: #004940 !important;
        }

        #tarteaucitronManager #tarteaucitronAllDenied {
          background: transparent !important;
          color: #005e53 !important;
          border: 1px solid rgba(0, 94, 83, 0.3) !important;
        }

        #tarteaucitronManager #tarteaucitronAllDenied:hover {
          background: rgba(0, 94, 83, 0.05) !important;
        }

        /* Titres et textes du panneau */
        #tarteaucitronServices .tarteaucitronTitle,
        #tarteaucitronServices .tarteaucitronH1 {
          color: #005e53 !important;
        }

        /* Liens dans le panneau */
        #tarteaucitronServices a {
          color: #005e53 !important;
        }

        #tarteaucitronServices a:hover {
          color: #004940 !important;
        }

        /* Responsive du panneau sur mobile */
        @media (max-width: 768px) {
          #tarteaucitronServices {
            margin: 8px !important;
            max-width: calc(100% - 16px) !important;
            width: calc(100% - 16px) !important;
            box-sizing: border-box !important;
          }

          #tarteaucitronManager button {
            font-size: 12px !important;
            padding: 8px 12px !important;
          }
        }
      `}</style>
    </>
  );
}
