import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { supabase } from "../supabase/client"
import '../components/style.css'

export default function PlayerDetail() {
  const { id } = useParams()
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data } = await supabase.from("players").select("*").eq("id", id).single()
      setPlayer(data)
    }
    fetchPlayer()
  }, [id])

  if (!player) return <p className="p-4">Loading...</p>

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-2">{player.username}</h2>
      <p><strong>Game:</strong> {player.game}</p>
      <p><strong>Rank:</strong> {player.rank}</p>
      <p><strong>Joined:</strong> {new Date(player.created_at).toLocaleString()}</p>
      <Link to={`/edit/${player.id}`} className="text-blue-600 underline block mt-4">Edit Player</Link>
    </div>
  )
}
