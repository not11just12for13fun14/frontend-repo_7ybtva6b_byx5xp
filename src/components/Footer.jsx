export default function Footer(){
  return (
    <footer className="bg-white border-t border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-slate-700 font-semibold">LaGabi</p>
          <p className="text-slate-500 text-sm">Bărci de pescuit proiectate și construite cu grijă în România.</p>
        </div>
        <p className="text-right text-slate-400 text-sm">© {new Date().getFullYear()} LaGabi. Toate drepturile rezervate.</p>
      </div>
    </footer>
  )
}
