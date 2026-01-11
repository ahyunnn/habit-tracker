"use client";

import Link from "next/link";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  onToggle: () => void;
}

const Header = ({ onToggle }: HeaderProps) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "gray",
        height: 60,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ minHeight: 60 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open sidebar"
          onClick={onToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6" fontWeight="bold">
            Habit Tracker
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
