import { useState, useEffect } from 'react'

export default function Contact(){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  useEffect(()=>{
    // prefill model from query
    const params = new URLSearchParams(window.location.search)
    const model = params.get('model')
    if (model) setForm(f => ({...f, message: `Sunt interesat de modelul ${model.toUpperCase()}.\n`}))
  },[])

  const submit = async (e)=>{
    e.preventDefault()
    setStatus('sending')
    try{
      const r = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await r.json()
      if(data.ok){
        setStatus('ok')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <main className="pt-24 pb-16 bg-slate-950 min-h-screen text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="mt-3 text-slate-300">Spune-ne despre ce ai nevoie și revenim rapid cu detalii.</p>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Nume</label>
              <input required value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-emerald-400 text-white"/>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input required type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-emerald-400 text-white"/>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Mesaj</label>
              <textarea required rows={5} value={form.message} onChange={e=>setForm({...form, message: e.target.value})} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-emerald-400 text-white"/>
            </div>
            <button disabled={status==='sending'} className="inline-flex items-center rounded-md bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-white px-5 py-3 font-medium transition-colors">
              {status==='sending' ? 'Se trimite...' : 'Trimite mesaj'}
            </button>
            {status==='ok' && <p className="text-emerald-300">Mulțumim! Mesajul a fost trimis.</p>}
            {status==='error' && <p className="text-rose-300">A apărut o problemă. Încearcă din nou.</p>}
          </form>
        </div>
        <div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-xl font-semibold">Informații de contact</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li><strong>Telefon:</strong> 07xx xxx xxx</li>
              <li><strong>Email:</strong> contact@lagabi.ro</li>
            </ul>
            <div className="mt-5 aspect-video rounded-lg overflow-hidden border border-white/10">
              <iframe title="Harta" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.971692799507!2d26.102538!3d44.426767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjQiTiAyNsKwMDYnMDkuMSJF!5e0!3m2!1sen!2sro!4v1681999999999"></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
