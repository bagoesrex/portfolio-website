import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { FOOTER_LINKS } from "@/config/footer";

export default function Footer() {
  return (
    <footer>
      <MaxWidthWrapper className="pt-15 pb-12">
        <div className="space-y-2">
          <nav>
            <ul className="grid grid-cols-4 gap-x-5 gap-y-2.75">
              {FOOTER_LINKS.map(({ href, label, icon: Icon }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="flex items-center gap-2.5 duration-700 hover:text-orange-800"
                  >
                    <Icon size={16} />{" "}
                    <span className="text-[17px] font-[420]">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
