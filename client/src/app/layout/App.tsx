import { Box, Button, CssBaseline, Grid2, Typography } from "@mui/material"
import Header from "./Header"

import '../../style/index.css'
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <Outlet />
    </>
  )
}

export default App
