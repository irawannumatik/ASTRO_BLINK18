import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import { ClipboardList, ArrowLeft, ArrowRight, GraduationCap, Pencil } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";
import { playPopSound } from "@/hooks/useAudio";

type Topic = "BILANGAN BULAT" | "PERBANDINGAN";

interface SubTopic {
  label: string;
  route: string;
}

interface TopicData {
  label: Topic;
  subTopics: SubTopic[];
}

interface KelasData {
  label: string;
  topics: TopicData[];
}

const latihanMandiriData: Record<string, KelasData> = {
  "KELAS 7": {
    label: "KELAS 7",
    topics: [
      {
        label: "BILANGAN BULAT",
        subTopics: [
          { label: "PENJUMLAHAN BILANGAN BULAT", route: "/latihan-mandiri/bilangan-bulat/penjumlahan" },
          { label: "PENGURANGAN BILANGAN BULAT", route: "/latihan-mandiri/bilangan-bulat/pengurangan" },
          { label: "PERKALIAN BILANGAN BULAT", route: "/latihan-mandiri/bilangan-bulat/perkalian" },
          { label: "PEMBAGIAN BILANGAN BULAT", route: "/latihan-mandiri/bilangan-bulat/pembagian" },
          { label: "OPERASI HITUNG CAMPURAN BILANGAN BULAT", route: "/latihan-mandiri/bilangan-bulat/campuran" },
          { label: "KPK DAN FPB", route: "/latihan-mandiri/bilangan-bulat/kpk-fpb" },
        ],
      },
      {
        label: "PERBANDINGAN",
        subTopics: [
          { label: "PERBANDINGAN UMUM, SATUAN PEMBANDING DAN RASIO", route: "/latihan-mandiri/perbandingan/umum" },
          { label: "PERBANDINGAN SENILAI DAN BERBALIK NILAI", route: "/latihan-mandiri/perbandingan/senilai" },
          { label: "PERBANDINGAN CAMPURAN", route: "/latihan-mandiri/perbandingan/campuran" },
          { label: "SKALA", route: "/latihan-mandiri/perbandingan/skala" },
        ],
      },
    ],
  },
  "KELAS 8": {
    label: "KELAS 8",
    topics: [],
  },
  "KELAS 9": {
    label: "KELAS 9",
    topics: [],
  },
};

type Kelas = keyof typeof latihanMandiriData;

const LatihanMandiriPage = () => {
  const navigate = useNavigate();
  const [selectedKelas, setSelectedKelas] = useState<Kelas | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const handleKelasClick = (kelas: Kelas) => {
    playPopSound();
    setSelectedKelas(kelas);
    setSelectedTopic(null);
  };

  const handleTopicClick = (topic: Topic) => {
    playPopSound();
    setSelectedTopic(topic);
  };

  const handleBackToKelas = () => {
    playPopSound();
    setSelectedKelas(null);
    setSelectedTopic(null);
  };

  const handleBackToTopics = () => {
    playPopSound();
    setSelectedTopic(null);
  };

  const currentKelasData = selectedKelas ? latihanMandiriData[selectedKelas] : null;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation prevPath="/menu" />
      <div className="relative z-10 max-w-3xl w-full px-4 py-10">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-white text-glow-cyan mb-2 text-center">
          LATIHAN MANDIRI
        </h1>
        <p className="text-white/60 text-sm text-center mb-8 font-body">
          Pilih tingkatan kelas untuk memulai latihan
        </p>

        {/* KELAS SELECTION */}
        {!selectedKelas && (
          <div className="animate-slide-up grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
            {(Object.keys(latihanMandiriData) as Kelas[]).map((kelas, i) => (
              <button
                key={kelas}
                onClick={() => handleKelasClick(kelas)}
                className="group bg-card/80 backdrop-blur border border-border rounded-xl p-6 
                  hover:border-primary/60 hover:box-glow-cyan transition-all duration-300 
                  cursor-pointer text-center animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-sm font-bold text-white">{kelas}</h3>
                <p className="text-xs text-muted-foreground mt-1 font-body">
                  {latihanMandiriData[kelas].topics.length} materi
                </p>
              </button>
            ))}
          </div>
        )}

        {/* TOPICS SELECTION */}
        {selectedKelas && !selectedTopic && currentKelasData && (
          <div className="animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handleBackToKelas}
                className="flex items-center gap-1 text-sm text-white/70 hover:text-primary transition-colors cursor-pointer font-body"
              >
                <ArrowLeft className="w-4 h-4" /> Kembali
              </button>
              <h2 className="font-display text-base font-bold text-white text-glow-accent">
                {selectedKelas}
              </h2>
              <div className="w-4" />
            </div>

            <div className="flex flex-col gap-3">
              {currentKelasData.topics.map((topic, i) => (
                <button
                  key={topic.label}
                  className="group flex items-center gap-4 bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4
                    hover:border-primary/60 hover:box-glow-cyan transition-all duration-300
                    cursor-pointer text-left animate-slide-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  onClick={() => handleTopicClick(topic.label)}
                >
                  <Pencil className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-body text-sm text-white">{topic.label}</span>
                  <ArrowRight className="w-4 h-4 text-white/50 ml-auto group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* SUBTOPICS SELECTION */}
        {selectedKelas && selectedTopic && currentKelasData && (
          <div className="animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handleBackToTopics}
                className="flex items-center gap-1 text-sm text-white/70 hover:text-primary transition-colors cursor-pointer font-body"
              >
                <ArrowLeft className="w-4 h-4" /> Kembali
              </button>
              <h2 className="font-display text-base font-bold text-white text-glow-accent">
                {selectedTopic}
              </h2>
              <div className="w-4" />
            </div>

            <div className="flex flex-col gap-3">
              {currentKelasData.topics
                .find((t) => t.label === selectedTopic)
                ?.subTopics.map((subTopic, i) => (
                  <button
                    key={subTopic.label}
                    className="group flex items-center gap-4 bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4
                      hover:border-primary/60 hover:box-glow-cyan transition-all duration-300
                      cursor-pointer text-left animate-slide-up"
                    style={{ animationDelay: `${i * 0.05}s` }}
                    onClick={() => {
                      playPopSound();
                      navigate(subTopic.route);
                    }}
                  >
                    <Pencil className="w-5 h-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-body text-sm text-white">{subTopic.label}</span>
                    <span className="ml-auto text-xs text-accent font-display">📝 BUKA</span>
                  </button>
                ))}
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/menu")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-body"
          >
            ← Kembali ke Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanMandiriPage;
