import { Languages } from "lucide-react";

export function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-3">
          <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 p-3 rounded-xl">
            <Languages className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              LingoBridge
            </h1>
            <p className="text-slate-400 text-sm">
              Seamless translation across languages
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}