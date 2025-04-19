import RankSelector from "./RankSelector"
import React, { useState, useEffect } from "react"
import './style.css'

export default function PlayerForm({ initialData, onSubmit }) {
  const [form, setForm] = useState({
    username: "",
    game: "",
    rank: ""
  })

  useEffect(() => {
    if (initialData) setForm(initialData)
  }, [initialData])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleRankChange = (rank) => {
    setForm({ ...form, rank })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="border rounded px-3 py-2 w-full"
      />
      <input
        name="game"
        placeholder="Game (e.g., Fortnite)"
        value={form.game}
        onChange={handleChange}
        className="border rounded px-3 py-2 w-full"
      />
      <RankSelector value={form.rank} onChange={handleRankChange} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  )
}
