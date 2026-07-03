'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { WHATSAPP_NUMBER, WA_MESSAGES } from '@/lib/messages'

const WHATSAPP_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="28"
    height="28"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.549 4.083 1.508 5.799L.057 23.5c-.057.217.135.407.35.348l5.788-1.516A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.017-1.378l-.36-.213-3.734.979.996-3.636-.235-.374A9.818 9.818 0 1 1 12 21.818z" />
  </svg>
)

export function WhatsAppFloat() {
  const shouldReduceMotion = useReducedMotion()
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES.footer)}`

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(1.5); opacity: 0;   }
          100% { transform: scale(1.5); opacity: 0;   }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-pulse-ring { animation: none !important; }
        }
        .wa-btn:focus-visible {
          outline-offset: 4px;
          border-radius: 9999px;
        }
        .wa-float-wrapper {
          bottom: 24px;
          right: 24px;
        }
        .wa-btn {
          width: 56px;
          height: 56px;
        }
        @media (max-width: 480px) {
          .wa-float-wrapper {
            bottom: 16px;
            right: 16px;
          }
          .wa-btn {
            width: 46px;
            height: 46px;
          }
        }
      `}</style>

      <motion.div
        className="wa-float-wrapper"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { delay: 1.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
        style={{
          position: 'fixed',
          zIndex: 40,
        }}
      >
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco pelo WhatsApp"
          className="wa-btn"
          style={{
            borderRadius: 'var(--vm-radius-full)',
            background: '#25D366',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 4px 16px rgba(37, 211, 102, 0.35)',
            transition: `transform var(--vm-dur-fast) var(--vm-ease-out), box-shadow var(--vm-dur-fast) var(--vm-ease-out)`,
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)'
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(37, 211, 102, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.35)'
          }}
        >
          <span
            className="wa-pulse-ring"
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'var(--vm-radius-full)',
              background: '#25D366',
              animation: 'wa-pulse 2s ease-out infinite',
            }}
          />
          {WHATSAPP_ICON}
        </Link>
      </motion.div>
    </>
  )
}
