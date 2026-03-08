import { useNavigate, useParams } from "react-router-dom";
import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { Pencil } from "lucide-react";
import { playPopSound } from "@/hooks/useAudio";
import { latihanMandiriData } from "@/data/latihanMandiriData";

const LatihanMandiriContentPage = () => {
  const navigate = useNavigate();
  const { topic, subtopic } = useParams<{ topic: string; subtopic: string }>();

  const key = `${topic}/${subtopic}`;
  const content = latihanMandiriData[key];

  if (!content) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center gradient-space overflow-hidden">
        <Starfield />
        <PageNavigation />
        <div className="relative z-10 max-w-3xl w-full px-4 py-10 text-center">
          <Pencil className="w-12 h-12 text-accent mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-primary text-glow-cyan mb-4">
            Latihan Segera Hadir
          </h1>
          <p className="text-white/60 font-body text-sm mb-8">
            Soal latihan mandiri untuk topik ini sedang dalam pengembangan. Silakan kembali nanti.
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
        <Pencil className="w-10 h-10 text-accent mx-auto mb-3" />
        <h1 className="font-display text-xl md:text-2xl font-bold text-primary text-glow-cyan mb-2 text-center">
          {content.title}
        </h1>
        <p className="text-white/50 text-xs text-center mb-6 font-body">
          {content.kelas} — Irawan Sutiawan, M.Pd
        </p>

        <div className="space-y-4 animate-slide-up">
          {content.soal.map((soal) => (
            <div
              key={soal.no}
              className="bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4"
            >
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary text-sm font-display font-bold flex items-center justify-center mt-0.5">
                  {soal.no}
                </span>
                <p className="font-body text-sm text-white/90 leading-relaxed flex-1">
                  {soal.soal}
                </p>
              </div>
              {soal.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 ml-10">
                  {soal.options.map((opt, j) => (
                    <div
                      key={j}
                      className="font-body text-xs text-white/70 bg-muted/30 rounded-lg px-3 py-2"
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => { playPopSound(); navigate(content.backPath); }}
            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-body"
          >
            ← Kembali ke {content.backLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanMandiriContentPage;
