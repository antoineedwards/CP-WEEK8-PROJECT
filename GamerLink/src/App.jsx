import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreatePlayer from "./pages/CreatePlayer"
import EditPlayer from "./pages/EditPlayer"
import PlayerDetail from "./pages/PlayerDetail"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePlayer />} />
        <Route path="/edit/:id" element={<EditPlayer />} />
        <Route path="/player/:id" element={<PlayerDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
