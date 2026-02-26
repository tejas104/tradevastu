import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TRADEVASTU ENTERPRISES",
    short_name: "TRADEVASTU",
    description: "Scalable sales infrastructure for Indian real estate and MSME organizations.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1E293B",
    icons: [
      {
        src: "/logo_tradevastu.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo_tradevastu.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

