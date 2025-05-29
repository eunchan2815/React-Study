import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../../app/Home"
import { Rootlayout } from "../layout/Rootlayout"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rootlayout/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
