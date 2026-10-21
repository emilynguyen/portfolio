import Script from 'next/script'

const GA_ID = 'G-K61WZB13Q0'

// Count real visits only: not local dev, and not Vercel preview deployments.
const IS_PRODUCTION = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === 'production' : process.env.NODE_ENV === 'production'

export default function Analytics() {
  if (!IS_PRODUCTION) return null
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`}
      </Script>
    </>
  )
}
