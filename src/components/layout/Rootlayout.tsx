import { Outlet } from "react-router-dom"
import { Header } from "../header"

export const Rootlayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
