"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className="bg-[#09090B] text-[#FAFAFA] font-sans flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-4 rounded-card border border-[#27272A] bg-[#18181B] p-8 shadow-none">
          <h2 className="text-xl font-bold font-mono text-[#F43F5E]">Hades System Error</h2>
          <p className="text-sm text-[#A1A1AA] font-sans">
            {error.message || "An unexpected error occurred in Kallos Engine."}
          </p>
          <button
            onClick={() => reset()}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-tactical bg-[#A855F7] px-5 py-2.5 font-mono text-sm font-semibold text-[#09090B] cursor-pointer hover:opacity-90 focus-visible:outline-2 focus-visible:outline-[#D4FF00]"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
