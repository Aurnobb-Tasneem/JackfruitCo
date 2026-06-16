export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-start font-extrabold leading-none tracking-tight text-[#c72a09] ${
        className ?? ""
      }`}
    >
      <span>JACKFRUIT</span>
      <span className="ml-[0.12em] mt-[0.04em] text-[0.4em] font-bold tracking-tight">CO.</span>
    </span>
  );
}
