import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="AstroPulse Logo"
          width={120}
          height={120}
          className="mb-6"
        />

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4 text-[#ff0b00]">
          AstroPulse
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 max-w-xl mb-10">
          Talk to expert astrologers anytime, anywhere.  
          Chat, Call, Video & Personalized Kundli — all in one place.
        </p>

        {/* Coming Soon Badge */}
        <div className="bg-[#ff0b00] text-white px-6 py-2 rounded-full text-sm font-semibold mb-10">
          🚀 App Launching Soon
        </div>

        {/* Email Notify */}
        <div className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg outline-none"
          />
          <button className="bg-[#ff0b00] hover:bg-red-700 text-white px-6 py-3 rounded-r-lg font-semibold">
            Notify Me
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-gray-700">
          <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition">
            🔮 Live Astrologers
          </div>

          <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition">
            💬 Chat & Call
          </div>

          <div className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition">
            📜 Instant Kundli
          </div>
        </div>

        {/* Footer */}
        <p className="mt-16 text-gray-400 text-sm">
          © {new Date().getFullYear()} AstroPulse. All rights reserved.
        </p>

      </main>
    </div>
  );
}