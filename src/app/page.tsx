// src/app/page.tsx
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiChartdotjs,
  SiNodedotjs,
} from "react-icons/si";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 text-foreground flex items-center justify-center px-6">
      <section className="max-w-3xl w-full text-center">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <img
            src="/avatar.jpg" // coloque aqui o caminho da sua foto
            alt="Foto de perfil"
            className="w-40 h-40 rounded-full object-cover shadow-lg ring-4 ring-purple-500/20"
          />
        </div>

        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-purple-500">TITULO </span>
        </h1>

        {/* Bio */}
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-12">
          Descrição
        </p>

        {/* Skills */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-300">Tecnologias</h2>

        <div className="flex flex-wrap justify-center gap-6 text-5xl text-muted-foreground">
          <SiHtml5 className="hover:text-orange-500 transition-colors hover:scale-110" />
          <SiCss3 className="hover:text-blue-500 transition-colors hover:scale-110" />
          <SiJavascript className="hover:text-yellow-400 transition-colors hover:scale-110" />
          <SiTailwindcss className="hover:text-cyan-400 transition-colors hover:scale-110" />
          <SiBootstrap className="hover:text-purple-600 transition-colors hover:scale-110" />
          <SiReact className="hover:text-sky-400 transition-colors hover:scale-110" />
          <SiNextdotjs className="hover:text-black dark:hover:text-white transition-colors hover:scale-110" />
          <SiVite className="hover:text-indigo-500 transition-colors hover:scale-110" />
          <SiChartdotjs className="hover:text-pink-400 transition-colors hover:scale-110" />
          <SiNodedotjs className="hover:text-green-500 transition-colors hover:scale-110" />
        </div>
      </section>
    </main>
  );
}
