import PlayerForm from "../components/PlayerForm"
import { supabase } from "../supabase/client"
import { useNavigate } from "react-router-dom"
import '../components/style.css'

export default function CreatePlayer() {
  const navigate = useNavigate()

  const handleCreate = async (playerData) => {
    await supabase.from("players").insert([playerData])
    navigate("/")
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Create New Player</h2>
      <PlayerForm onSubmit={handleCreate} />
    </div>
  )
}
