import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AllModels(){
  const [models, setModels] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{
    fetch(`${baseUrl}/boats`).then(r=>r.json()).then(setModels).catch(()=>{})
  },[])

  return (
    <main className="pt-24 pb-16 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">Toate barcuțele</h1>
          <p className="text-slate-300 mt-2">Catalogul complet de modele LaGabi.</p>
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map(m => (
            <Link key={m.slug} to={`/modele/${m.slug}`} className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl overflow-hidden backdrop-blur transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img loading="lazy" src={m.images?.[0]} alt={m.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"/>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">{m.name}</h3>
                <p className="text-slate-300 text-sm mt-1 line-clamp-2">{m.short_desc}</p>
                <button className="mt-4 inline-flex text-emerald-300 group-hover:text-emerald-200">Află mai mult →</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
