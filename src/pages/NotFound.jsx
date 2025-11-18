import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 grid place-items-center p-8 text-center">
      <div>
        <h1 className="text-5xl font-bold">404</h1>
        <p className="mt-2 text-slate-300">Pagina nu a fost găsită.</p>
        <Link to="/" className="inline-flex mt-6 px-5 py-3 rounded-md bg-emerald-500 text-white hover:bg-emerald-400 transition-colors">Înapoi la Acasă</Link>
      </div>
    </div>
  )
}
