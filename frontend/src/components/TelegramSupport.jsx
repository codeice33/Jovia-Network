import React from "react";
import { TELEGRAM_HANDLE } from "@/lib/constants";

export default function TelegramSupport({
  username = TELEGRAM_HANDLE,
}) {
  return (
    <>
      <style>{`
        :root {
          --primary-denim: #320757;
          --secondary-cyan: #FEBD01;
          --accent-white: #E5E5E5;
          --accent-green: #00E57B;
        }

        .telegram-widget-container {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 9999;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .telegram-support-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--primary-denim) 0%, var(--secondary-cyan) 100%);
          color: var(--accent-white);
          padding: 8px 14px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
          box-shadow: 0 4px 14px rgba(50, 7, 87, 0.3);
          transition: all 0.3s ease;
        }

        .telegram-support-btn:hover {
          transform: translateY(-2px);
          
          color: #FFFFFF;
        }

        .icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .telegram-icon {
          width: 16px;
          height: 16px;
          fill: var(--accent-white);
        }

        .online-badge {
          width: 7px;
          height: 7px;
          background-color: var(--accent-green);
          border: 1.5px solid var(--primary-denim);
          border-radius: 50%;
          position: absolute;
          top: -2px;
          right: -2px;
        }
      `}</style>

      <div className="telegram-widget-container">
        <a
          href={`https://t.me/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-support-btn"
        >
          <div className="icon-wrapper">
            <svg className="telegram-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.07-.78 4.18-1.82 6.97-3.02 8.37-3.61 3.98-1.66 4.81-1.95 5.35-1.96.12 0 .38.03.55.17.14.12.18.28.2.4.02.12.02.26 0 .39z" />
            </svg>
            <span className="online-badge" />
          </div>
          <span>Contact Support</span>
        </a>
      </div>
    </>
  );
}
