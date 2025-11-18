import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          <motion.path
            initial={{ d: 'M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,117.3C672,139,768,181,864,202.7C960,224,1056,224,1152,218.7C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z' }}
            animate={{ d: [
              'M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,117.3C672,139,768,181,864,202.7C960,224,1056,224,1152,218.7C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
              'M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,117.3C672,96,768,64,864,85.3C960,107,1056,181,1152,218.7C1248,256,1344,256,1392,234.7L1440,213.3L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
            ]}}
            transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            fill="url(#g)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 sm:pb-24">
        <motion.h1 className="text-4xl sm:text-6xl font-extrabold text-slate-800 tracking-tight"
          initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>
          LaGabi – bărci de pescuit construite pentru liniștea apei
        </motion.h1>
        <motion.p className="mt-4 max-w-2xl text-lg text-slate-600"
          initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.8}}>
          Minimaliste, stabile și gata să te ducă acolo unde mușcă peștele. Descoperă cele mai noi modele.
        </motion.p>
        <motion.div className="mt-8 flex gap-3"
          initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.35, duration:0.8}}>
          <Link to="/modele" className="px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
            Vezi modelele
          </Link>
          <a href="#nou" className="px-6 py-3 rounded-full bg-sky-600/10 text-sky-700 hover:bg-sky-600/20 transition-colors">
            Modele noi
          </a>
        </motion.div>
      </div>
    </section>
  )
}
