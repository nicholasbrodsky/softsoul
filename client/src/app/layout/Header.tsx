import { AppBar, Avatar, Box, Button, List, ListItem, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const navStyles = {
    textDecoration: "none",
    typography: "h6",
    color: '#1f472d'
}

const navLinks = [
    {title: "home", path: ''},
    {title: "About", path: 'about'},
    {title: "Services", path: 'services'},
]

interface IProps {
    children: React.ReactElement
}

function ElevationScroll(props: IProps) {
    const { children } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return children
      ? React.cloneElement(children, {
          elevation: trigger ? 4 : 0,
        })
      : null;
  }

export default function Header() {
    
    return (
        <ElevationScroll>
            <AppBar position="sticky" sx={{ backgroundColor: "#dde4b8", minHeight: '5vh' }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex" }}>
                        <Typography component={NavLink} to={''} sx={{ textDecoration: 'none', color: '#1f472d', fontWeight: '600' }} variant="h4">SoftSoul</Typography>
                        <Avatar src="images/profile_pic.png" sx={{ ml: 4 }} />
                    </Box>
                    <Box>
                        <List style={{ display: "flex" }}>
                            {navLinks.map(({title, path}) => (
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={navStyles}
                                >
                                    { title.toUpperCase() }
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <Button
                            variant="outlined"
                            sx={{ color: '#1f472d', border: '3px solid #1f472d', fontWeight: 'bold' }}
                            component={NavLink}
                            to={'book-appointment'}
                        >
                            Book Appointment
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}