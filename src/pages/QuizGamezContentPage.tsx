import { useNavigate, useParams } from "react-router-dom";
import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { Gamepad2, BookOpen } from "lucide-react";
import { playPopSound } from "@/hooks/useAudio";
import { quizGamezData } from "@/data/quizGamezData";

const QuizGamezContentPage = () => {
  const navigate = useNavigate();
  const { topic, subtopic } = useParams<{ topic: string; subtopic: string }>();

  const key = `${topic}/${subtopic}`;
  const content = quizGamezData[key];

  if (!content) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center gradient-space overflow-hidden">
        <Starfield />
        <PageNavigation />
        <div className="relative z-10 max-w-3xl w-full px-4 py-10 text-center">
          <Gamepad2 className="w-12 h-12 text-accent mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-primary text-glow-cyan mb-4">
            Soal Segera Hadir
          </h1>
          <p className="text-white/60 font-body text-sm mb-8">
            Soal game quiz untuk topik ini sedang dalam pengembangan. Silakan kembali nanti.
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
        <Gamepad2 className="w-10 h-10 text-accent mx-auto mb-3" />
        <h1 className="font-display text-xl md:text-2xl font-bold text-primary text-glow-cyan mb-2 text-center">
          GAME QUIZ — {content.title}
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
              <p className="font-body text-sm text-white mb-3">
                <span className="text-accent font-bold">{soal.no}.</span> {soal.soal}
              </p>
              {soal.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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

export default QuizGamezContentPage;
