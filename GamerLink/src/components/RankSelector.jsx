import React from 'react'
import './style.css'

export default function RankSelector({ value, onChange }) {
    const ranks = [
      "Bronze",
      "Silver",
      "Gold",
      "Platinum",
      "Diamond",
      "Champion",
      "Grand Champion"
    ]
  
    return (
      <div>
        <label htmlFor="rank" className="block text-sm font-medium mb-1">Select Rank</label>
        <select
          id="rank"
          name="rank"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        >
          <option value="">-- Choose a rank --</option>
          {ranks.map((rank) => (
            <option key={rank} value={rank}>{rank}</option>
          ))}
        </select>
      </div>
    )
  }
  