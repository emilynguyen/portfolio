/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets app/global-not-found.tsx render its own <html>/<body>: there's no single root layout (two route groups).
  experimental: { globalNotFound: true },
  async redirects() {
    // These were redirect pages in Webflow (an inline script sent visitors on). Temporary (307) since the targets may change.
    return [
      {
        source: '/resume',
        destination:
          'https://drive.google.com/file/d/0B6dEoGhrXuYId0g0Nm5BR1ZYbTg/view?usp=sharing&resourcekey=0-5_h23jwFza1_CU15CamV8A',
        permanent: false,
      },
      { source: '/binge', destination: 'https://en-binge.vercel.app/', permanent: false },
    ]
  },
}

export default nextConfig
