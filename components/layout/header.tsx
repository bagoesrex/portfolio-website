import { CONTAINER } from "@/constants/layout";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed w-full px-3.5 py-3">
      <div
        className={`mx-auto flex w-full ${CONTAINER.default} bg-primary/5 border-border/30 max-w-7xl items-center rounded-md border-[1.2px] px-3 py-2.5`}
      >
        <Link href={"/"} className="flex items-center gap-1">
          <Image src="/icons/logo.svg" alt="main icon" width={32} height={32} priority />
          <h1 className="font-mono text-[15px] font-semibold text-[#004A7C]">BagoesRex</h1>
        </Link>
      </div>
    </header>
  );
}
