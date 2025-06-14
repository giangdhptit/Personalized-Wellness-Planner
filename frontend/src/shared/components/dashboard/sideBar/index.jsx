"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

// MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { sideBarLinks } from "@/shared/constants/sideBarLinks";
import { useDispatch } from "react-redux";
import { signOutUser } from "@/shared/redux/slices/user";

export default function Sidebar({ handleToggle = () => {} }) {
  const dispatch = useDispatch();

  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => dispatch(signOutUser());

  return (
    <Box>
      <Image
        src={"/images/dashboard/light-logo.png"}
        alt="light-logo.png"
        width={200}
        height={70}
        style={{ margin: "10px 0px 2px 10px", cursor: "pointer" }}
        priority
      />

      <Typography sx={{ color: "white", ml: 2.5 }}>Menu</Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "calc(100vh - 120px)",
        }}
      >
        <Box>
          {sideBarLinks().map((link) => {
            const isActive = pathname.includes(link.path);
            const iconAlt = link.icon.split("/").pop();
            return (
              <ListItem key={link.id}>
                <ListItemButton
                  sx={{
                    border: `1px solid ${
                      isActive ? "var(--primary-color)" : "transparent"
                    }`,
                    borderRadius: "10px",
                    color: "white",
                    "&:hover": { background: !isActive && "#c5cfd93d" },
                    opacity: isActive ? 1 : 0.7,
                  }}
                  onClick={() => {
                    router.push(link.path);
                    handleToggle();
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <Image
                      src={link.icon}
                      height={20}
                      width={20}
                      alt={iconAlt}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={link.title}
                    sx={{
                      ".MuiListItemText-primary": {
                        fontSize: "14px",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </Box>
        <Box>
          <ListItem>
            <ListItemButton
              sx={{
                borderRadius: "10px",
                color: "white",
                "&:hover": { background: "#c5cfd93d" },
                opacity: 0.7,
              }}
              onClick={handleLogout}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Image
                  src={"/images/dashboard/logout.svg"}
                  height={20}
                  width={20}
                  alt="logout.svg"
                />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{
                  ".MuiListItemText-primary": {
                    fontSize: "14px",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </Box>
      </List>
    </Box>
  );
}
