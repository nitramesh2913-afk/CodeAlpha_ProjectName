import { Textarea } from "./ui/textarea";
import { Volume2 } from "lucide-react";
import { Language } from "../types";

interface TranslationCardProps {
  title: string;
  language: Language;
  text: string;
  onTextChange: (text: string) => void;
  onSpeak: () => void;
  placeholder: string;
}

const languageLabels: Record<Language, string> = {
  en: "English",
  ta: "Tamil",
  hi: "Hindi",
  fr: "French",
};

export function TranslationCard({
  title,
  language,
  text,
  onTextChange,
  onSpeak,
  placeholder,
}: TranslationCardProps) {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-700/50 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-sm font-medium">{title}</span>
          <span className="bg-violet-500/20 text-violet-400 text-xs font-semibold px-2 py-1 rounded-full">
            {languageLabels[language]}
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
      <Textarea
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
        className="min-h-48 bg-transparent border-0 text-slate-200 placeholder:text-slate-500 focus-visible:ring-0 resize-none text-lg p-4"
      />
    </div>
  );
}