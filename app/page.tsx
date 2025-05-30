import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import PulseMotion from "./_components/PulseMotion";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#252836] text-white flex flex-col items-center justify-center px-6 py-12 relative">
      <PulseMotion>
        <h1 className="text-4xl md:text-5xl font-bold text-[#EA7C69] mb-4 flex items-center justify-center gap-2">
          Welcome to Jaeger Resto 🍽️
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Your internal restaurant management solution. Designed to help staff and employees manage
          meals, orders, and restaurant operations efficiently.
        </p>

        <div className="mb-10 space-y-4">
          <h2 className="text-2xl font-semibold text-[#EA7C69]">Key Features</h2>
          <ul className="text-gray-300 text-left list-disc list-inside max-w-md mx-auto">
            <li>Track orders in real-time and monitor their status</li>
            <li>Manage meals, prices, and categories with ease</li>
            <li>View restaurant analytics including revenue and customers</li>
            <li>Customize restaurant settings and staff preferences</li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/home"
            className="flex items-center justify-center gap-2 bg-[#EA7C69] hover:bg-[#EA7C6942] text-white font-medium px-6 py-3 rounded-md shadow transition-colors"
          >
            View Menu <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 bg-[#1F1D2B] border border-[#393C49] hover:bg-[#393C49] text-white font-medium px-6 py-3 rounded-md shadow transition-colors"
          >
            Go to Dashboard <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <Link
            href="/auth/login"
            className="flex items-center justify-center gap-2 bg-[#1F1D2B] border border-[#393C49] hover:bg-[#393C49] text-white font-medium px-6 py-3 rounded-md shadow transition-colors"
          >
            Staff Login <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </PulseMotion>

      <footer className="absolute bottom-4 text-sm text-gray-500">
        Built with ❤️ for the crew of Jaeger Resto
      </footer>
    </main>
  );
}
