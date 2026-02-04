import MaxWidthWrapper from "@/components/layout/max-width-wrapper";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <MaxWidthWrapper className="bg-blue-500">
        <h1>Hello World</h1>
      </MaxWidthWrapper>
    </main>
  );
}
