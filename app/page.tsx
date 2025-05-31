import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import PulseMotion from "./_components/PulseMotion";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#252836] text-white flex flex-col items-center justify-center px-6 py-12 relative">
      <PulseMotion>
        <h1 className="text-4xl md:text-5xl font-bold text-[#EA7C69] mb-4 flex items-center justify-center gap-2">
          Welcome to Jaeger Resto
          <span className="w-8 h-8">
            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 15 15">
              <path
                fill="currentColor"
                d="M4.457 11.99L1 8V7h13v1l-3.496 3.99ZM3.988 2.5a.5.5 0 0 0-1 0v.567l-1.797.368a.25.25 0 1 0 .094.49l1.703-.277v.566l-1.75.036a.25.25 0 0 0 0 .5l1.75.036v1.212h1Zm9.5 1.5l-7.5.263V2.995l7.594-1.074a.5.5 0 0 0-.188-.982L5.98 2.455a.496.496 0 0 0-.99.045v.228l-.494.1v.352l.493-.08v1.197l-.493.01v.461L13.488 5a.5.5 0 0 0 0-1M10 13H5v.576h5Z"
              ></path>
            </svg>
          </span>
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
