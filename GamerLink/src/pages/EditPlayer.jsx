import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import PlayerForm from "../components/PlayerForm"
import { supabase } from "../supabase/client"
import '../components/style.css'

export default function EditPlayer() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data } = await supabase.from("players").select("*").eq("id", id).single()
      setPlayer(data)
    }
    fetchPlayer()
  }, [id])

  const handleUpdate = async (formData) => {
    await supabase.from("players").update(formData).eq("id", id)
    navigate("/")
  }

  const handleDelete = async () => {
    await supabase.from("players").delete().eq("id", id)
    navigate("/")
  }

  return player ? (
    <div className="p-4">
      <h2 className="text-xl mb-2">Edit Player</h2>
      <PlayerForm initialData={player} onSubmit={handleUpdate} />
      <button onClick={handleDelete} className="mt-4 bg-red-500 text-white px-4 py-2">Delete</button>
    </div>
  ) : <p className="p-4">Loading...</p>
}
