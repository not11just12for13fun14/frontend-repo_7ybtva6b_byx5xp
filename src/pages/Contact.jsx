import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { apiPost } from '../lib/api'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e)=>{
    e.preventDefault()
    setError('')
    try{
      await apiPost('/contact', form)
      setSent(true)
      setForm({name:'',email:'',message:''})
    }catch(err){
      setError('A apărut o eroare. Încearcă din nou.')
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Contact</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={submit} className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
            <label className="block mb-4">
              <span className="text-sm text-slate-600">Nume</span>
              <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full border border-emerald-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" required/>
            </label>
            <label className="block mb-4">
              <span className="text-sm text-slate-600">Email</span>
              <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full border border-emerald-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" required/>
            </label>
            <label className="block mb-4">
              <span className="text-sm text-slate-600">Mesaj</span>
              <textarea rows="5" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="mt-1 w-full border border-emerald-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" required/>
            </label>
            {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
            {sent ? (
              <p className="text-emerald-700">Mulțumim! Te vom contacta în curând.</p>
            ) : (
              <button className="px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">Trimite mesaj</button>
            )}
          </form>

          <div>
            <div className="mb-6">
              <p className="text-slate-700 font-medium">Telefon</p>
              <p className="text-slate-600">+40 7xx xxx xxx</p>
            </div>
            <div className="mb-6">
              <p className="text-slate-700 font-medium">Email</p>
              <p className="text-slate-600">contact@lagabi.ro</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-emerald-100">
              <iframe
                title="Harta LaGabi"
                src="https://www.openstreetmap.org/export/embed.html?bbox=26.09%2C44.43%2C26.14%2C44.46&layer=mapnik"
                className="w-full h-64"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
