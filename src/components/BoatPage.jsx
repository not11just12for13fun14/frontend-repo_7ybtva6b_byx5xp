import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function BoatPage(){
  const { slug } = useParams()
  const [boat, setBoat] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{
    fetch(`${baseUrl}/boats/${slug}`).then(async r => {
      if(!r.ok) throw new Error('Not found')
      return r.json()
    }).then(setBoat).catch(()=> setBoat(undefined))
  },[slug])

  if (boat === undefined) {
    return (
      <main className="pt-24 min-h-screen bg-slate-950 text-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl font-semibold">Modelul nu a fost găsit</h1>
          <Link className="text-emerald-300" to="/modele">Înapoi la toate modelele</Link>
        </div>
      </main>
    )
  }

  if(!boat){
    return <div className="pt-24 min-h-screen bg-slate-950" />
  }

  return (
    <main className="pt-24 pb-16 bg-slate-950 min-h-screen text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-slate-400 mb-6"><Link className="hover:text-slate-200" to="/modele">Modele</Link> / <span className="text-slate-200">{boat.name}</span></nav>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src={boat.images?.[0]} alt={boat.name} className="w-full h-full object-cover"/>
            </div>
            {boat.images?.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {boat.images.slice(1,5).map((img, i)=> (
                  <div key={i} className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-white/5">
                    <img src={img} alt={boat.name + ' ' + (i+2)} className="w-full h-full object-cover"/>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold">{boat.name}</h1>
            <p className="mt-3 text-slate-300">{boat.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {boat.specs?.length && (
                <Spec label="Lungime" value={boat.specs.length} />
              )}
              {boat.specs?.width && (
                <Spec label="Lățime" value={boat.specs.width} />
              )}
              {boat.specs?.weight && (
                <Spec label="Greutate" value={boat.specs.weight} />
              )}
              {boat.specs?.capacity && (
                <Spec label="Capacitate" value={boat.specs.capacity} />
              )}
              {boat.specs?.material && (
                <Spec label="Material" value={boat.specs.material} />
              )}
            </div>

            <div className="mt-8 flex gap-3">
              <Link to={`/contact?model=${boat.slug}`} className="inline-flex items-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-3 font-medium transition-colors">Solicită ofertă</Link>
              <a href="#galerie" className="inline-flex items-center rounded-md border border-white/10 hover:border-white/20 text-slate-100 px-5 py-3 font-medium transition-colors">Galerie</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Spec({label, value}){
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
      <p className="text-slate-400 text-xs">{label}</p>
      <p className="text-slate-100 font-medium">{value}</p>
    </div>
  )
}
