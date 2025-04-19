import { Link } from "react-router-dom"
import React from 'react'
import './style.css'


export default function PlayerCard({ player }) {
  return (
    <div style={{ backgroundColor: 'grey', borderRadius: '8px', padding: '16px', marginBottom: '16px' }} className="player-card">
      <h3 className="text-lg font-semibold">{player.username}</h3>
      <p>{player.game} — {player.rank}</p>
      <div className="mt-2 text-sm space-x-4">
        <Link to={`/player/${player.id}`} style={{backgroundColor:'white', borderRadius:'4px'}}>Details</Link>
        <Link to={`/edit/${player.id}`} style={{backgroundColor:'white', borderRadius:'4px', margin:'2px'}}>Edit</Link>
      </div>
    </div>
  )
}
