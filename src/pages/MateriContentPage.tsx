import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// MateriContentPage: hanya menampilkan MATERI
// Game Quiz → QuizGamezContentPage (route /quiz-gamez/:topic/:subtopic)
// Latihan Mandiri → LatihanMandiriContentPage (route /latihan-mandiri/:topic/:subtopic)
import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { playPopSound } from "@/hooks/useAudio";
import { materiContentData } from "@/data/materiContentData";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

// Renderer for rich content: supports $$block$$, $inline$, **bold**, bullet lines
const RichContent = ({ text }: { text: string }) => {
  // Split by block math $$...$$
  const parts = text.split(/(^\s*\$\$[\s\S]*?\$\$\s*$)/m);

  return (
    <div className="font-body text-sm text-white/85 leading-relaxed space-y-1">
      {parts.map((part, i) => {
        const blockMatch = part.match(/^\s*\$\$([\s\S]*?)\$\$\s*$/m);
        if (blockMatch) {
          return (
            <div key={i} className="my-3 flex justify-center overflow-x-auto">
              <BlockMath math={blockMatch[1].trim()} />
            </div>
          );
        }
        // Split by lines for bullet/text handling
        return (
          <span key={i}>
            {part.split("\n").map((line, j) => (
              <LineRenderer key={j} line={line} />
            ))}
          </span>
        );
      })}
    </div>
  );
};

const LineRenderer = ({ line }: { line: string }) => {
  if (line.trim() === "") return <div className="h-2" />;
  if (line.trim() === "---") return <hr className="border-border/50 my-2" />;

  const isBullet = line.trimStart().startsWith("•") || line.trimStart().startsWith("-");

  return (
    <div className={isBullet ? "flex gap-2 ml-2" : "block"}>
      {isBullet && <span className="text-accent shrink-0 mt-0.5">•</span>}
      <span className={isBullet ? "flex-1" : ""}>
        <InlineRenderer text={isBullet ? line.replace(/^\s*[•\-]\s*/, "") : line} />
      </span>
    </div>
  );
};

const InlineRenderer = ({ text }: { text: string }) => {
  // Split by inline math $...$
  const parts = text.split(/(\$[^$\n]+\$)/g);
  return (
    <>
      {parts.map((part, i) => {
        const inlineMatch = part.match(/^\$([^$\n]+)\$$/);
        if (inlineMatch) {
          return (
            <span key={i} className="mx-0.5 inline-block align-middle">
              <InlineMath math={inlineMatch[1]} />
            </span>
          );
        }
        // Handle **bold**
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return (
          <span key={i}>
            {boldParts.map((bp, k) => {
              const boldMatch = bp.match(/^\*\*([^*]+)\*\*$/);
              if (boldMatch) {
                return (
                  <strong key={k} className="text-white font-semibold">
                    {boldMatch[1]}
                  </strong>
                );
              }
              return <span key={k}>{bp}</span>;
            })}
          </span>
        );
      })}
    </>
  );
};

const MateriContentPage = () => {
  const navigate = useNavigate();
  const { topic, subtopic } = useParams<{ topic: string; subtopic: string }>();
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const key = `${topic}/${subtopic}`;
  const content = materiContentData[key];

  const toggleSection = (idx: number) => {
    playPopSound();
    setExpandedSections((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  if (!content) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center gradient-space overflow-hidden">
        <Starfield />
        <PageNavigation />
        <div className="relative z-10 max-w-3xl w-full px-4 py-10 text-center">
          <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-primary text-glow-cyan mb-4">
            Materi Segera Hadir
          </h1>
          <p className="text-white/60 font-body text-sm mb-8">
            Konten untuk halaman ini sedang dalam pengembangan. Silakan kembali nanti.
          </p>
          <button
            onClick={() => { playPopSound(); navigate(-1); }}
            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-body"
          >
            ← Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation />
      <div className="relative z-10 max-w-3xl w-full px-4 py-10">
        <BookOpen className="w-10 h-10 text-accent mx-auto mb-3" />
        <h1 className="font-display text-xl md:text-2xl font-bold text-primary text-glow-cyan mb-2 text-center">
          {content.title}
        </h1>
        <p className="text-white/50 text-xs text-center mb-6 font-body">
          {content.kelas} — Irawan Sutiawan, M.Pd
        </p>

        {/* Materi Sections */}
        <div className="space-y-3 animate-slide-up">
          {content.sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-card/80 backdrop-blur border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleSection(idx)}
                className="w-full flex items-center justify-between px-5 py-4 cursor-pointer text-left"
              >
                <span className="font-display text-sm text-accent font-bold">
                  {section.heading}
                </span>
                {expandedSections.includes(idx) ? (
                  <ChevronUp className="w-4 h-4 text-accent shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/50 shrink-0" />
                )}
              </button>
              {expandedSections.includes(idx) && (
                <div className="px-5 pb-5">
                  <RichContent text={section.content} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              playPopSound();
              navigate(content.backPath);
            }}
            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-body"
          >
            ← Kembali ke {content.backLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MateriContentPage;
