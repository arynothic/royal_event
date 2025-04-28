import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "सृजन Labs",
    short_name: "सृजन",
    description: "We Turn MVPs Into Real Companies - Build Startups That Outgrow the Code",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon-36x36.png",
        sizes: "36x36",
        type: "image/png"
      },
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        src: "/favicon-72x72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/favicon-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
