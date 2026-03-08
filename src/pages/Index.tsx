import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import SpaceObjects from "@/components/SpaceObjects";
import { playPopSound } from "@/hooks/useAudio";
import { Rocket } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleMulai = () => {
    playPopSound();
    navigate("/menu");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gradient-space overflow-hidden">
      <Starfield />
      <SpaceObjects />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-2xl w-full">
        {/* Logo / Icon */}
        <div className="mb-6 animate-float">
          <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center box-glow-cyan mx-auto">
            <Rocket className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-6xl font-extrabold text-primary text-glow-cyan mb-2 tracking-tight">
          NUMATIK
        </h1>
        <h2 className="font-display text-lg md:text-xl font-semibold text-secondary text-glow-magenta mb-2 tracking-widest uppercase">
          Math Learning App
        </h2>
        <p className="font-body text-sm md:text-base text-muted-foreground mb-10 max-w-md">
          Aplikasi belajar matematika SMP yang interaktif dan menyenangkan. Jelajahi materi, latihan soal, kuis, dan lebih banyak lagi!
        </p>

        {/* CTA Button */}
        <button
          onClick={handleMulai}
          className="animate-button-pulse font-display text-lg font-bold px-12 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 cursor-pointer shadow-lg"
        >
          MULAI BELAJAR 🚀
        </button>

        {/* Tagline bawah */}
        <p className="mt-8 font-body text-xs text-muted-foreground/60 tracking-wider uppercase">
          Dikembangkan oleh Numatik • Matematika SMP
        </p>
      </div>
    </div>
  );
};

export default Index;
