import React from "react";
import { AppBar, Toolbar, Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface NavbarProps {
  layout: "vertical" | "horizontal";
  styles?: React.CSSProperties;
  items: { label: string; onClick: () => void }[];
  customButtonStyles?: React.CSSProperties;
}

const Navbar: React.FC<NavbarProps> = ({
  layout,
  styles,
  items,
  customButtonStyles,
}) => {
  const isVertical = layout === "vertical";

  return (
    <AppBar
      position="static"
      sx={{
        flexDirection: isVertical ? "column" : "row",
        alignItems: isVertical ? "flex-start" : "center",
        p: 1,
        ...styles,
      }}
    >
      <Toolbar
        sx={{
          flexDirection: isVertical ? "column" : "row",
          width: "100%",
        }}
      >
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: isVertical ? "column" : "row",
            gap: 1,
          }}
        >
          {items.map((item, index) => (
            <Button
              key={index}
              onClick={item.onClick}
              variant="text"
              color="inherit"
              sx={{
                ...customButtonStyles,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
