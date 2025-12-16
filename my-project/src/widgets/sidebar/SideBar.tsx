"use client";

import Link from "next/link";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

interface SideBarProps {
  isOpen: boolean;
}

const drawerWidth = 240;

const SideBar = ({ isOpen }: SideBarProps) => {
  return (
    <Drawer
      variant="temporary"
      open={isOpen}
      onClose={() => {}}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          top: "60px",
          height: "calc(100vh - 60px)",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Template
        </Typography>

        <List>
          <ListItemButton component={Link} href="/template/bucket-list">
            <ListItemText primary="Bucket-List" />
          </ListItemButton>

          <ListItemButton component={Link} href="/template/habit-tracker">
            <ListItemText primary="Habit-Tracker" />
          </ListItemButton>

          <ListItemButton component={Link} href="/template/mandalart">
            <ListItemText primary="Mandalart" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
