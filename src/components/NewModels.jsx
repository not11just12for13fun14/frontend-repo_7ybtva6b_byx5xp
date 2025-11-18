import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function NewModels(){
  const [models, setModels] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{
    fetch(`${baseUrl}/boats?new=true`).then(r=>r.json()).then(setModels).catch(()=>{})
  },[])

  return (
    <section id="modele-noi" className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Modele noi</h2>
            <p className="text-slate-300 mt-2">Descoperă noutățile din atelierul nostru.</p>
          </div>
          <Link to="/modele" className="text-emerald-300 hover:text-emerald-200 transition-colors">Vezi toate</Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.slice(0,3).map((m)=> (
            <Link key={m.slug} to={`/modele/${m.slug}`} className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl overflow-hidden backdrop-blur transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img loading="lazy" src={m.images?.[0]} alt={m.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"/>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">{m.name}</h3>
                <p className="text-slate-300 text-sm mt-1 line-clamp-2">{m.short_desc}</p>
                <button className="mt-4 inline-flex text-emerald-300 group-hover:text-emerald-200">Detalii →</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
