import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { apiGet } from '../lib/api'

export default function Models(){
  const [models, setModels] = useState([])

  useEffect(()=>{
    apiGet('/models').then(setModels).catch(()=>setModels([]))
  }, [])

  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Toate barcuțele</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map(m => (
            <Link key={m.slug} to={`/modele/${m.slug}`} className="group border border-emerald-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <img src={m.cover_image} alt={m.name} className="h-48 w-full object-cover group-hover:scale-[1.02] transition-transform" loading="lazy"/>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800">{m.name}</h3>
                <p className="text-sm text-slate-600">{m.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
