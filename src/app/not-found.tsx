import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center select-none bg-grid-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        <div className="relative w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center p-2 shadow-lg">
          <Image
            src="/ST.png"
            alt="Shatripthi Technologies"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
            404 Error
          </span>
          <h1 className="text-4xl font-black tracking-tight text-white">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="btn btn-primary px-8 rounded-full border-none shadow-[0_4px_14px_0_rgba(249,115,22,0.4)] hover:shadow-[0_4px_20px_0_rgba(249,115,22,0.65)] hover:scale-105 transition-all duration-300 text-white font-semibold inline-flex items-center gap-2"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
