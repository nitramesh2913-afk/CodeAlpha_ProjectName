import { Button } from "./ui/button";
import { ArrowRight, Copy, Check, Trash2, Loader2 } from "lucide-react";

interface ActionButtonsProps {
  onTranslate: () => void;
  onCopy: () => void;
  onClear: () => void;
  isTranslating: boolean;
  copied: boolean;
  hasOutput: boolean;
  hasInput: boolean;
}

export function ActionButtons({
  onTranslate,
  onCopy,
  onClear,
  isTranslating,
  copied,
  hasOutput,
  hasInput,
}: ActionButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <Button
        onClick={onTranslate}
        disabled={!hasInput || isTranslating}
        className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isTranslating ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Translating...
          </>
        ) : (
          <>
            <ArrowRight className="w-5 h-5 mr-2" />
            Translate
          </>
        )}
      </Button>

      <Button
        onClick={onCopy}
        disabled={!hasOutput}
        variant="outline"
        className="bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white px-6 py-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {copied ? (
          <>
            <Check className="w-5 h-5 mr-2 text-emerald-400" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-5 h-5 mr-2" />
            Copy
          </>
        )}
      </Button>

      <Button
        onClick={onClear}
        disabled={!hasInput && !hasOutput}
        variant="outline"
        className="bg-slate-800 border-slate-700 text-slate-400 hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400 px-6 py-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Trash2 className="w-5 h-5 mr-2" />
        Clear
      </Button>
    </div>
  );
}