import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 pt-25 pb-10 text-center">
      <h1 className="mb-3 text-4xl font-bold text-red-600">404 - Not Found</h1>
      <p className="mb-4 text-lg text-gray-700">Lagi Development WOK, Tunggu Tanggal Panennya 😹👍</p>
      <div className="relative mb-4 h-64 w-64">
        <Image src="/gif/error-404.gif" alt="Error 404 GIF" fill className="object-contain hue-rotate-100 saturate-200 filter" priority />
      </div>
      <Link href="/" className="rounded-lg bg-red-600 px-6 py-2 text-white transition hover:bg-red-700">
        Back to Home
      </Link>
    </main>
  );
}
