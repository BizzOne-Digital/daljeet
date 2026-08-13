import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-24">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand">404</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold text-navy">Page Not Found</h1>
        <p className="mt-4 text-slate">That page doesn&apos;t exist. Let&apos;s get you back to a fresh start.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-bold text-white">Return Home</Link>
      </div>
    </section>
  );
}
