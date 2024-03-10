import { useState, useRef, useContext } from "react";

import { DashboardContext } from "../context/dashboardContext";

import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  NotificationsNoneRounded,
  SearchRounded,
  PeopleAltOutlined,
  MenuRounded,
} from "@mui/icons-material";

import { grey } from "@mui/material/colors";

import avatar from "../assets/images/avatar.png";
import iranFlag from "../assets/images/Iran.svg";
import ukFlag from "../assets/images/UK.svg";
import { toast } from "react-hot-toast";

const languages = [
  {
    img: iranFlag,
    language: "فارسی",
    arialLabel: "persian",
  },
  {
    img: ukFlag,
    language: "انگلیسی",
    arialLabel: "english",
  },
];

const Navbar = () => {
  const menuItem = useRef(null);
  const theme = useTheme();

  const { handleOpenModal, setDrawerOpen, drawerOpen } =
    useContext(DashboardContext);

  const [language, setLanguage] = useState("persian");
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, language) => {
    setAnchorEl(null);
    setLanguage(event.target.ariaLabel);
    toast.success(`زبان به ${language} تغییر کرد.`);
  };

  return (
    <AppBar
      variant="elevation"
      position="absolute"
      sx={{
        width: 1,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,.8)",
        backdropFilter: "blur(6px)",
        zIndex: "98",
        "&.MuiAppBar-root": {
          boxShadow: "none",
        },
      }}
    >
      <Toolbar
        sx={{
          width: 1,
          height: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="div"
          sx={{
            width: smDown ? 80 : 110,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            component="button"
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "4px",
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "transparent",
              outline: "none",
              border: "none",
              cursor: "pointer",
              transition: "background .3s ease-in-out ",
              "&:hover": {
                backgroundColor: grey[100],
              },
              display: {
                xs: "block",
                lg: "none",
              },
            }}
          >
            <MenuRounded
              sx={{ color: "rgb(108, 115, 127)", fontSize: "1.8rem" }}
            />
          </Box>
          <Box
            component="button"
            onClick={handleOpenModal}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "4px",
              width: 40,
              height: 40,
              backgroundColor: "transparent",
              outline: "none",
              border: "none",
              borderRadius: "50%",
              transition: "background .3s ease-in-out ",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: grey[100],
              },
            }}
          >
            <SearchRounded
              sx={{ color: "rgb(108, 115, 127)", fontSize: "1.8rem" }}
            />
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            width: smDown ? 220 : 300,
            height: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Tooltip title="زبان">
            <Box
              component="span"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 35,
                height: 35,
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              <img
                src={language === "persian" ? iranFlag : ukFlag}
                sx={{ width: 1, height: 1, objectFit: "cover" }}
                alt="flag"
              />
            </Box>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={open}
            sx={{ zIndex: "99" }}
            PaperProps={{
              style: {
                height: "auto",
                width: 200,
              },
            }}
          >
            {languages.map((item, index) => (
              <MenuItem
                key={index}
                ref={menuItem}
                aria-label={`${item.arialLabel}`}
                onClick={(event) => handleClose(event, item.language)}
                sx={{
                  width: 1,
                  height: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  my: 0.8,
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  sx={{
                    width: 35,
                    height: 25,
                    objectFit: "cover",
                    pointerEvents: "none",
                  }}
                />
                <Box component="span" sx={{ pointerEvents: "none" }}>
                  <Typography variant="body2">{item.language}</Typography>
                </Box>
              </MenuItem>
            ))}
          </Menu>
          <Tooltip title="اعلان">
            <Box
              component="span"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                padding: "4px",
                width: 35,
                height: 35,
                borderRadius: "50%",
                transition: "background .3s ease-in-out ",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
            >
              <NotificationsNoneRounded
                sx={{ color: "rgb(108, 115, 127)", fontSize: "1.8rem" }}
              />
              <Box
                component="span"
                sx={{
                  position: "absolute",
                  width: 18,
                  height: 18,
                  top: 1,
                  left: 1,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(240, 68, 56)",
                }}
              >
                <Typography variant="overline">2</Typography>
              </Box>
            </Box>
          </Tooltip>
          <Tooltip title="مخاطبین">
            <Box
              component="span"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "4px",
                width: 35,
                height: 35,
                borderRadius: "50%",
                transition: "background .3s ease-in-out ",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
            >
              <PeopleAltOutlined
                sx={{ color: "rgb(108, 115, 127)", fontSize: "1.8rem" }}
              />
            </Box>
          </Tooltip>
          <Box
            component="span"
            sx={{
              outline: `1px solid ${grey[300]}`,
              outlineOffset: "3px",
              cursor: "pointer",
              borderRadius: "50%",
            }}
          >
            <Avatar variant="circular" src={avatar} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
