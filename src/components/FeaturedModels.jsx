import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiGet } from '../lib/api'

export default function FeaturedModels(){
  const [models, setModels] = useState([])

  useEffect(()=>{
    apiGet('/models?featured=true').then(setModels).catch(()=>setModels([]))
  }, [])

  return (
    <section id="nou" className="py-16 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Modele noi</h2>
          <Link to="/modele" className="text-emerald-700 hover:text-emerald-800">Vezi toate →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.slice(0,3).map(m => (
            <article key={m.slug} className="group bg-white rounded-xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-md transition-shadow">
              <img src={m.cover_image} alt={m.name} className="h-48 w-full object-cover group-hover:scale-[1.02] transition-transform" loading="lazy"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-800">{m.name}</h3>
                <p className="text-sm text-slate-600 mt-1 line-clamp-2">{m.tagline || m.description}</p>
                <Link to={`/modele/${m.slug}`} className="inline-block mt-3 text-emerald-700 hover:text-emerald-800 font-medium">
                  Detalii →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
