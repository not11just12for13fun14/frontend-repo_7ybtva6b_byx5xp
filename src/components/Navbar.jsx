import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const linkBase = 'text-slate-700 hover:text-emerald-700 transition-colors'
  const active = 'text-emerald-700'

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-emerald-500/90 inline-block shadow-inner"/>
          <span className="font-semibold text-slate-800">LaGabi</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({isActive})=>`${linkBase} ${isActive?active:''}`}>Acasă</NavLink>
          <NavLink to="/modele" className={({isActive})=>`${linkBase} ${isActive?active:''}`}>Toate barcuțele</NavLink>
          <NavLink to="/contact" className={({isActive})=>`${linkBase} ${isActive?active:''}`}>Contact</NavLink>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>
          <Menu className="w-6 h-6 text-slate-700"/>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            <NavLink to="/" onClick={()=>setOpen(false)} className={linkBase}>Acasă</NavLink>
            <NavLink to="/modele" onClick={()=>setOpen(false)} className={linkBase}>Toate barcuțele</NavLink>
            <NavLink to="/contact" onClick={()=>setOpen(false)} className={linkBase}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
