import { Montserrat } from "next/font/google";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat-font",
});

export function generateMetadata() {
  return {
    title: "404 - Page Not Found",
    description: "Oops! The page you're looking for doesn't exist. It might have been moved or deleted.",
  };
}

export default function NotFound() {
  return (
    <main className="h-screen grid place-content-center">
      <div className="text-center flex flex-col gap-1 items-center">
        <h1 className={`text-4xl font-bold tracking-wide ${montserrat.className}`}>404</h1>
        <h2 className={`text-3xl font-semibold ${montserrat.className}`}>Page Not Found</h2>
        <div className="text-xl text-gray-400">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </div>
        <Link href="/" className="px-4 py-2 mt-4 flex items-center gap-2 bg-violet-500 text-white rounded-lg">
          <IoHome />
          <div>Go back to Home</div>
        </Link>
      </div>
    </main>
  )
}
