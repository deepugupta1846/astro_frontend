/** @type {import('next').NextConfig} */
function apiImageRemotePatterns() {
  const raw =
    typeof process.env.NEXT_PUBLIC_API_BASE_URL === "string"
      ? process.env.NEXT_PUBLIC_API_BASE_URL.trim()
      : "";
  const base = raw.replace(/\/$/, "") || "http://localhost:5000";
  try {
    const u = new URL(base);
    const pattern = {
      protocol: u.protocol.replace(":", ""),
      hostname: u.hostname,
      pathname: "/**",
    };
    if (u.port) {
      pattern.port = u.port;
    }
    return [pattern];
  } catch {
    return [];
  }
}

const nextConfig = {
  reactCompiler: true,
  // output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gravatar.com",
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
      ...apiImageRemotePatterns(),
    ],
  },
};

export default nextConfig;
