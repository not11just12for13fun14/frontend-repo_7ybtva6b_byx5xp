import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { apiGet } from '../lib/api'

function SpecRow({label, value}){
  return (
    <div className="flex items-center justify-between py-2 border-b border-emerald-100">
      <span className="text-slate-600">{label}</span>
      <span className="font-medium text-slate-800">{value}</span>
    </div>
  )
}

export default function ModelDetail(){
  const { slug } = useParams()
  const [model, setModel] = useState(null)

  useEffect(()=>{
    apiGet(`/models/${slug}`).then(setModel)
  }, [slug])

  if(!model) return null

  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-emerald-100">
              <img src={model.cover_image} alt={model.name} className="w-full h-full object-cover"/>
            </div>
            {model.gallery && model.gallery.length>0 && (
              <div className="mt-3 grid grid-cols-4 gap-3">
                {model.gallery.map((g,i)=> (
                  <img key={i} src={g.url} alt={g.alt||model.name} className="h-20 w-full object-cover rounded-md border border-emerald-100" loading="lazy"/>
                ))}
              </div>
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">{model.name}</h1>
            <p className="mt-2 text-slate-600">{model.description || model.tagline}</p>

            {model.specs && model.specs.length>0 && (
              <div className="mt-6 rounded-xl border border-emerald-100 p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Specificații</h3>
                {model.specs.map((s,i)=> <SpecRow key={i} label={s.label} value={s.value}/>) }
              </div>
            )}

            <a href="#contact" className="inline-block mt-6 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">Solicită ofertă</a>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
