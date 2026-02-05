import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-30 p-4 text-center">
      <h1 className="text-4xl font-bold mb-6 text-red-600">404 - Not Found</h1>
      <p className="text-lg mb-6 text-gray-700">
        Lagi Development WOK, Tunggu Tanggal Panennya 😹👍
      </p>
      <div className="w-64 h-64 relative mb-6">
        <Image
          src="/gif/megumin.gif"
          alt="Megumin GIF"
          fill
          className="object-contain"
          priority
        />
      </div>
    </main>
  );
}
