import { useEffect, useState } from "react"
import { supabase } from "../supabase/client"
import PlayerCard from "../components/PlayerCard"
import { Link } from "react-router-dom"
import '../components/style.css'

export default function Home() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data } = await supabase
        .from("players")
        .select("*")
        .order("created_at", { ascending: false })
      setPlayers(data)
    }
    fetchPlayers()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">GamerLink Team</h1>
      <Link to="/create" className="text-blue-600 underline">+ Add Player</Link>
      <div className="mt-4">
        {players.map(player => <PlayerCard key={player.id} player={player} />)}
      </div>
    </div>
  )
}
