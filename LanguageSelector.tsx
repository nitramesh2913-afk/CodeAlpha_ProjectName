import { ArrowRightLeft } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Language } from "../types";

interface LanguageSelectorProps {
  sourceLang: Language;
  targetLang: Language;
  onSourceChange: (lang: Language) => void;
  onTargetChange: (lang: Language) => void;
  onSwap: () => void;
}

const languages: { value: Language; label: string }[] = [
  { value: "en", label: "English" },
  { value: "ta", label: "Tamil" },
  { value: "hi", label: "Hindi" },
  { value: "fr", label: "French" },
];

export function LanguageSelector({
  sourceLang,
  targetLang,
  onSourceChange,
  onTargetChange,
  onSwap,
}: LanguageSelectorProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <Select value={sourceLang} onValueChange={(v) => onSourceChange(v as Language)}>
        <SelectTrigger className="w-40 bg-slate-800 border-slate-700 text-slate-200">
          <SelectValue placeholder="Source" />
        </SelectTrigger>
        <SelectContent className="bg-slate-800 border-slate-700">
          {languages.map((lang) => (
            <SelectItem
              key={lang.value}
              value={lang.value}
              className="text-slate-200 focus:bg-slate-700"
            >
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        onClick={onSwap}
        variant="outline"
        size="icon"
        className="bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-violet-500"
      >
        <ArrowRightLeft className="w-5 h-5 text-violet-400" />
      </Button>

      <Select value={targetLang} onValueChange={(v) => onTargetChange(v as Language)}>
        <SelectTrigger className="w-40 bg-slate-800 border-slate-700 text-slate-200">
          <SelectValue placeholder="Target" />
        </SelectTrigger>
        <SelectContent className="bg-slate-800 border-slate-700">
          {languages.map((lang) => (
            <SelectItem
              key={lang.value}
              value={lang.value}
              className="text-slate-200 focus:bg-slate-700"
            >
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}