import { motion } from "framer-motion"

export default function Overlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {/* Верхняя часть — название */}
      <div className="absolute top-8 left-0 right-0 flex justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="font-sans text-2xl md:text-3xl font-light text-white tracking-[0.25em] uppercase"
        >
          Artefact Studio
        </motion.h1>
      </div>

      {/* Нижняя часть — слоган + кнопка */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-white/60 text-sm tracking-widest uppercase text-center"
        >
          Креативное агентство · Визуальные решения
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="pointer-events-auto"
        >
          <a
            href="mailto:hello@artefact.studio"
            className="inline-block border border-white/30 text-white/80 hover:text-white hover:border-white/70 text-xs tracking-widest uppercase px-8 py-3 transition-all duration-300"
          >
            Связаться с нами
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-white/20 text-xs tracking-widest"
        >
          Перетащите или используйте стрелки для навигации
        </motion.p>
      </div>
    </div>
  )
}
