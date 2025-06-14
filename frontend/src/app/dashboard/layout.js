"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
const Sidebar = dynamic(() => import("@/shared/components/dashboard/sideBar"), {
  ssr: true,
});
import TopBar from "@/shared/components/dashboard/topBar";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawerWidth = 240;

  return (
    <Box display={"flex"}>
      <CssBaseline />
      <TopBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="nav"
        width={{ lg: drawerWidth }}
        flexShrink={{ sm: 0 }}
        aria-label="mailbox folders"
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#080326",
            },
          }}
        >
          <Sidebar handleToggle={handleDrawerToggle} />
        </Drawer>

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#080326",
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>
      <Box
        component="main"
        flexGrow={1}
        p={3}
        width={"100%"}
        overflow={"hidden"}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
