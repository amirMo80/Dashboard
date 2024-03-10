import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import SidebarDrawer from "./SidebarDrawer";

const SidebarContainer = () => {
  return (
    <Box
      component="div"
      sx={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Sidebar />
      <SidebarDrawer />
    </Box>
  );
};

export default SidebarContainer;
