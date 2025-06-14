"use client";
import PropTypes from "prop-types";

// MUI
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

import { IoMenu } from "react-icons/io5";

import useClient from "@/shared/hooks/useClientSide";
import { useSelector } from "react-redux";
import { getCurrentUser } from "@/shared/redux/slices/user";

export default function TopBar({ drawerWidth, handleDrawerToggle }) {
  const currentUser = useSelector(getCurrentUser);
  const name = currentUser?.firstName ? `${currentUser.firstName}` : "";

  const { isClient } = useClient();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { lg: `calc(100% - ${drawerWidth}px)` },
        ml: { lg: `${drawerWidth}px` },
        backgroundColor: "var(--secondary-color)",
        boxShadow: "none",
        color: "var(--primary-color)",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { lg: "none" } }}
        >
          <IoMenu />
        </IconButton>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Typography
            variant="h6"
            noWrap
            fontWeight={600}
            fontSize={{ xs: 20, md: 30 }}
          >
            Welcome
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Typography
              variant="h6"
              noWrap
              fontWeight={600}
              fontSize={16}
              display={{ xs: "none", sm: "block" }}
            >
              {isClient ? name : ""}
            </Typography>
            <Avatar
              src="/images/dashboard/avatar.svg"
              sx={{ width: 40, height: 40 }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
