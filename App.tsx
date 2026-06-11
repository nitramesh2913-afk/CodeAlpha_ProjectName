import { useState } from "react";
import { Header } from "./components/Header";
import { TranslationCard } from "./components/TranslationCard";
import { LanguageSelector } from "./components/LanguageSelector";
import { ActionButtons } from "./components/ActionButtons";
import { TranslationOutput } from "./components/TranslationOutput";
import { translateText } from "./utils/translator";
import { Language } from "./types";

function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [sourceLang, setSourceLang] = useState<Language>("en");
  const [targetLang, setTargetLang] = useState<Language>("ta");
  const [isTranslating, setIsTranslating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    setIsTranslating(true);
    setError("");
    try {
      const result = await translateText(inputText, sourceLang, targetLang);
      setOutputText(result);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Translation failed. Please try again.";
      setError(msg);
      setOutputText("");
    }
    setIsTranslating(false);
  };

  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText(outputText);
    setOutputText(inputText);
    setError("");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = (text: string, lang: Language) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang =
      lang === "ta" ? "ta-IN" :
      lang === "hi" ? "hi-IN" :
      lang === "fr" ? "fr-FR" : "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const handleClear = () => {
    setInputText("");
    setOutputText("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <TranslationCard
            title="Source Text"
            language={sourceLang}
            text={inputText}
            onTextChange={setInputText}
            onSpeak={() => handleSpeak(inputText, sourceLang)}
            placeholder="Enter text to translate..."
          />

          <TranslationOutput
            text={outputText}
            targetLang={targetLang}
            onSpeak={() => handleSpeak(outputText, targetLang)}
            error={error}
          />
        </div>

        <LanguageSelector
          sourceLang={sourceLang}
          targetLang={targetLang}
          onSourceChange={setSourceLang}
          onTargetChange={setTargetLang}
          onSwap={handleSwap}
        />

        <ActionButtons
          onTranslate={handleTranslate}
          onCopy={handleCopy}
          onClear={handleClear}
          isTranslating={isTranslating}
          copied={copied}
          hasOutput={!!outputText}
          hasInput={!!inputText}
        />

        <div className="text-center mt-6">
          <span className="text-slate-500 text-sm">
            {inputText.length} characters | {inputText.split(/\s+/).filter(Boolean).length} words
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;
