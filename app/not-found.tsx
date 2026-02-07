import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 pt-30 text-center">
      <h1 className="mb-6 text-4xl font-bold text-red-600">404 - Not Found</h1>
      <p className="mb-6 text-lg text-gray-700">Lagi Development WOK, Tunggu Tanggal Panennya 😹👍</p>
      <div className="relative mb-6 h-64 w-64">
        <Image src="/gif/megumin.gif" alt="Megumin GIF" fill className="object-contain" priority />
      </div>
    </main>
  );
}
