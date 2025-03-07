import type { NextConfig } from "next";
import { matchRemotePattern } from "next/dist/shared/lib/match-remote-pattern";

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ozlvasiqfneaqbxldojh.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/temur-gallery/**",
      },
    ],
  },
};
