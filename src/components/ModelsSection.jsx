import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ModelsSection(){
  const [models, setModels] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{
    fetch(`${baseUrl}/boats?new=true`).then(r=>r.json()).then(setModels).catch(()=>{})
  }, [])

  return (
    <section id="modele-noi" className="relative bg-gradient-to-b from-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Modele noi</h2>
            <p className="text-slate-200/80">Ultimele apariții din atelierul LaGabi.</p>
          </div>
          <Link to="/modele" className="text-emerald-300 hover:text-emerald-200">Toate modelele →</Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map(m => (
            <Link to={`/modele/${m.slug}`} key={m.slug} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-all">
              <div className="aspect-video overflow-hidden">
                <img src={m.images?.[0]} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">{m.name}</h3>
                <p className="text-slate-300/90 text-sm line-clamp-2">{m.short_desc}</p>
                <span className="inline-block mt-3 text-emerald-300 group-hover:text-emerald-200">Detalii →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
