"use client";

import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, SiReact, SiNextdotjs, SiVite, SiChartdotjs, SiNodedotjs } from "react-icons/si";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 text-foreground flex items-center justify-center px-6 py-12">
      <section className="max-w-4xl w-full text-center">
        
        {/* Avatar animado */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex justify-center mb-10">
          <Image src="/pic.jpg" alt="Foto de perfil de Gabrielly Ferreira" className="w-50 h-50 rounded-full object-cover shadow-lg ring-4 ring-purple-500/20 hover:scale-105 transition-transform" width={200} height={200}/>
        </motion.div>

        {/* Título */}
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="font-extrabold text-center mb-6">
          <h1 className="text-transparent uppercase bg-clip-text bg-gradient-to-b from-purple-500 to-teal-500 text-4xl md:text-5xl">Olá, sou a Gabrielly Ferreira!</h1>
        </motion.div>

        {/* Bio */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
          Desenvolvedora Front-End | UI/UX Designer | Estagiária em Desenvolvimento de Sistemas | Graduanda em Ciência da Computação
        </motion.p>

        {/* Frase*/}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="italic text-muted-foreground mb-10">
          "Codando o futuro com criatividade e propósito."
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="flex justify-center gap-6 mb-12">
          <Link href="#projetos" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl shadow-md transition-colors">Ver Projetos</Link>
          <Link href="https://www.linkedin.com/in/gabrielly-ferreira" target="_blank" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl shadow-md transition-colors">Fale Comigo</Link>
        </motion.div>

        {/* Sobre mim */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-neutral-900 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">Sobre Mim</h2>
          <p className="text-muted-foreground leading-relaxed">Sou apaixonada por tecnologia e inovação, unindo design e lógica para criar experiências digitais únicas. Atualmente, estagiária em Desenvolvimento de Sistemas, explorando o universo full stack enquanto busco entregar soluções eficientes e criativas.</p>
        </motion.section>

        {/* Tecnologias */}
        <motion.section initial="hidden"whileInView="visible"viewport={{ once: true }}variants={{hidden: { opacity: 0, y: 50 },visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },}}className="mt-20 bg-neutral-800 py-10 rounded-md">
          <h2 className="font-bold text-2xl text-purple-500 mb-12">Tecnologias & Ferramentas</h2>
          
          <div className="flex flex-wrap justify-center gap-8 text-6xl text-muted-foreground mb-6">
            {[
              { Icon: SiHtml5, color: "#E34F26" },
              { Icon: SiCss3, color: "#1572B6" },
              { Icon: SiJavascript, color: "#F7DF1E" },
              { Icon: SiBootstrap, color: "#7952B3" },
              { Icon: SiTailwindcss, color: "#38BDF8" },
              { Icon: SiNextdotjs, color: "#FFFFFF" },
              { Icon: SiReact, color: "#61DAFB" },
              { Icon: SiChartdotjs, color: "#FF6384" },
              { Icon: SiNodedotjs, color: "#68A063" },
            ].map(({ Icon, color }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 5, color }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="hover:drop-shadow-lg transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.section>


      </section>
    </main>
  );
}
