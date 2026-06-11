import { Volume2, AlertCircle } from "lucide-react";
import { Language } from "../types";

interface TranslationOutputProps {
  text: string;
  targetLang: Language;
  onSpeak: () => void;
  error?: string;
}

const languageLabels: Record<Language, string> = {
  en: "English",
  ta: "Tamil",
  hi: "Hindi",
  fr: "French",
};

export function TranslationOutput({
  text,
  targetLang,
  onSpeak,
  error,
}: TranslationOutputProps) {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-700/50 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-sm font-medium">Translation</span>
          <span className="bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-2 py-1 rounded-full">
            {languageLabels[targetLang]}
          </span>
        </div>
        <button
          onClick={onSpeak}
          disabled={!text}
          className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          title="Listen"
        >
          <Volume2 className="w-4 h-4 text-slate-300" />
        </button>
      </div>
      <div className="min-h-48 p-4 text-lg">
        {error ? (
          <div className="flex items-start gap-2 text-red-400">
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <p className="text-sm leading-relaxed">{error}</p>
          </div>
        ) : text ? (
          <p className="text-slate-200 leading-relaxed whitespace-pre-wrap">{text}</p>
        ) : (
          <p className="text-slate-500 italic">Translation will appear here...</p>
        )}
      </div>
    </div>
  );
}
