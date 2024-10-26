import { Box, Button, Grid2, Typography } from "@mui/material";
import { Assignment, CalendarMonth, Call, Favorite, QuestionAnswer } from '@mui/icons-material';

export default function Home() {

    return (
        <>
            <Box sx={{ height: '95vh', bgcolor: '#dde4b8', }}>
                <Grid2 container sx={{ height: '100%' }}>
                    <Grid2 size={6} sx={{ pt: '10vh', color: '#1f472d', position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>

                        <span style={{ fontSize: '5vw', fontFamily: 'Courgette' }}>Welcome to</span>
                        <span style={{ fontSize: '9vw', fontFamily: 'Courgette' }}>SoftSoul</span>
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
                            <img src="images/banner_pic.jpeg" style={{ display: 'block', borderTopLeftRadius: '350px', borderTopRightRadius: '350px', height: '100%', width: '100%' }} />
                        </div>
                    </Grid2>
                </Grid2>
            </Box>

            <div style={{ padding: 36, minHeight: '40vh', backgroundImage: 'linear-gradient(to right, #fae6f4, #e6b3d7, #ffd4f2, #e6b3d7, #fae6f4)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ fontSize: '5vw', lineHeight: '1.1', fontWeight: '500' }}>Foster self-love</span>
                <span style={{ fontSize: '5vw', lineHeight: '1.1', fontWeight: '500' }}>to flourish in</span>
                <span style={{ fontSize: '5vw', lineHeight: '1.1', fontWeight: '500' }}>healing</span>
                <span style={{ fontStyle: 'italic', fontSize: '1.5vw', color: 'white', marginTop: 8 }}>Heal with compasionate support</span>
            </div>

            <div className="container-fluid">
                <div className="row" style={{
                    padding: 48,
                }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-4" style={{
                        
                    }}>
                        <span style={{
                            position: 'sticky',
                            fontSize: '4rem',
                            fontStyle: 'italic',
                            top: 170
                        }}>
                            Your Wellness Path...
                        </span>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: '2rem'
                            }}>
                                <Call
                                    color="primary"
                                    sx={{
                                        fontSize: 60,
                                        marginBottom: '1rem'
                                    }}
                                />
                                <span style={{
                                    textDecoration: 'toUpperCase',
                                    fontSize: '2rem',
                                    marginBottom: '1rem'
                                }}>Step 1: Give Us A Call</span>
                                <span style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '2rem'
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </span>
                                <hr style={{}} />
                            </div>
                        </div>
                        <div className="row">
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: '2rem'
                            }}>
                                <Assignment
                                    color="primary"
                                    sx={{
                                        fontSize: 60,
                                        marginBottom: '1rem'
                                    }}
                                />
                                <span style={{
                                    textDecoration: 'toUpperCase',
                                    fontSize: '2rem',
                                    marginBottom: '1rem'
                                }}>Step 2: Initial Assessment</span>
                                <span style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '2rem'
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </span>
                                <hr style={{}} />
                            </div>
                        </div>
                        <div className="row">
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: '2rem'
                            }}>
                                <CalendarMonth
                                    color="primary"
                                    sx={{
                                        fontSize: 60,
                                        marginBottom: '1rem'
                                    }}
                                />
                                <span style={{
                                    textDecoration: 'toUpperCase',
                                    fontSize: '2rem',
                                    marginBottom: '1rem'
                                }}>Step 3: Create Customized Program</span>
                                <span style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '2rem'
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </span>
                                <hr style={{}} />
                            </div>
                        </div>
                        <div className="row">
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: '2rem'
                            }}>
                                <QuestionAnswer
                                    color="primary"
                                    sx={{
                                        fontSize: 60,
                                        marginBottom: '1rem'
                                    }}
                                />
                                <span style={{
                                    textDecoration: 'toUpperCase',
                                    fontSize: '2rem',
                                    marginBottom: '1rem'
                                }}>Step 4: Coaching Sessions</span>
                                <span style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '2rem'
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </span>
                                <hr style={{}} />
                            </div>
                        </div>
                        <div className="row">
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginBottom: '2rem'
                            }}>
                                <Favorite
                                    color="primary"
                                    sx={{
                                        fontSize: 60,
                                        marginBottom: '1rem'
                                    }}
                                />
                                <span style={{
                                    textDecoration: 'toUpperCase',
                                    fontSize: '2rem',
                                    marginBottom: '1rem'
                                }}>Step 5: Maintain Change</span>
                                <span style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '2rem'
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <div className="row" style={{ padding: '120px', backgroundColor: '#f3f3f3', height: '50vh' }}>
                    <div className="col-md-6">
                        <img src="images/wellness-wheel.png" style={{ margin: 'auto', border: '0 solid black', display: 'block', height: '100%' }} />
                    </div>
                    <div className="col-md-6" style={{ border: '0px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                        <Typography variant="h3">Our Focus</Typography>
                        <Typography variant="h5">Holistic Health &amp; Wellness Transformation</Typography>
                        <Typography variant="h6">Soft Soul Collective believes that true wellness goes beyond just physical health; it’s about nurturing the mind, body, and spirit. My approach to health and wellness coaching is holistic, meaning I help my clients create sustainable habits in all areas of their lives—whether that’s nutrition, movement, mental well-being, or emotional balance. Together, we’ll work to build a personalized plan that supports your overall wellness, helping you feel energized, balanced, and empowered to live your best life.</Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#1f472d', borderRadius: '50px', fontSize: '18px', maxWidth: '25%' }}>Find Out More!</Button>
                    </div>
                </div>
            </div>
        </>
    )
}