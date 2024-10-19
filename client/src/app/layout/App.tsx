import { Box, Button, CssBaseline, Grid2, Typography } from "@mui/material"
import Header from "./Header"

import '../../style/index.css'

function App() {

  return (
    <>
      <CssBaseline />

      <Header />

      <Box sx={{ height: '95vh', bgcolor: '#4b6357', }}>
        <Grid2 container sx={{ height: '100%', color: 'white' }}>
          <Grid2 size={6} sx={{ pt: '10vh', position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>

            <span style={{ fontSize: '5vw', fontFamily: 'Courgette' }}>Welcome to</span>
            <span style={{ fontSize: '9vw', fontFamily: 'Courgette', marginBottom: -56 }}>SoftSoul</span>
            <span style={{ fontSize: '7vw', fontFamily: 'Courgette' }}>Collective</span>

            <Box sx={{ width: '100%', position: 'absolute', bottom: 0 }}>
              <Grid2 container sx={{ p: '24px' }}>
                <Grid2 size={6}>
                  <Typography variant="h5" sx={{ textAlign: 'center' }}>jenny@softsoulcollective.com<br />(661) 600-2200</Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="h5" sx={{ textAlign: 'center' }}>Valencia Blvd<br />Santa Clarita 91355</Typography>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
          <Grid2 container size={6} sx={{ height: '100%' }}>
            <div style={{ height: '85%', margin: 'auto' }}>
              <img src="images/banner_pic.jpeg" style={{ display: 'block', borderTopLeftRadius: '350px', borderTopRightRadius: '350px', height: '100%' }} />
            </div>
          </Grid2>
        </Grid2>
      </Box>

      <Grid2 container sx={{ p: '120px', backgroundColor: '#f3f3f3', height: '60vh' }}>
        <Grid2 size={6}>
          <img src="images/wellness_wheel.jpeg" style={{ margin: 'auto', border: '0 solid black', display: 'block', height: '100%' }} />
        </Grid2>
        <Grid2 size={5} sx={{ border: '1px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
          {/* <Box sx={{border: '1px solid black'}}> */}
          <Typography variant="h3">Our Focus</Typography>
          <Typography variant="h5">Holistic Health &amp; Wellness Transformation</Typography>
          <Typography variant="h6">Soft Soul Collective believes that true wellness goes beyond just physical health; it’s about nurturing the mind, body, and spirit. My approach to health and wellness coaching is holistic, meaning I help my clients create sustainable habits in all areas of their lives—whether that’s nutrition, movement, mental well-being, or emotional balance. Together, we’ll work to build a personalized plan that supports your overall wellness, helping you feel energized, balanced, and empowered to live your best life.</Typography>
          <Button variant="contained" sx={{ backgroundColor: 'red', borderRadius: '50px' }}>Find Out More!</Button>
          {/* </Box> */}
        </Grid2>
      </Grid2>

    </>
  )
}

export default App
