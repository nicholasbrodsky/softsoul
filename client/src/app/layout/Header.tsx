import { AppBar, Avatar, Box, Button, List, ListItem, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import React from "react";

const navStyles = {
    textDecoration: "none",
    typography: "h6"
}

const navLinks = [
    {title: "Service"},
    {title: "About"},
    {title: "Something"}
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
            <AppBar position="sticky" sx={{ backgroundColor: "#4b6357", height: '5vh' }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Box>
                        <List sx={{ display: "flex" }}>
                            {navLinks.map(({title}) => (
                                <ListItem sx={navStyles}>{title}</ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography variant="h4">SoftSoul</Typography>
                        <Avatar src="images/profile_pic.png" />
                    </Box>
                    <Box>
                        <Button >Book Appointment</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}