import { contactEmail, navItems } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#0d0d0d] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div>
          <Logo className="text-3xl" />
          <p className="mt-2 text-sm text-white/65">
            UK-based apparel sourcing and manufacturing partner.
          </p>
        </div>

        <div className="grid gap-3 text-xs uppercase tracking-[0.16em] text-white/70">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="text-sm text-white/60">
          <p>{contactEmail}</p>
          <p className="mt-4 text-xs">© {new Date().getFullYear()} JACKFRUIT CO.</p>
        </div>
      </div>
    </footer>
  );
}
