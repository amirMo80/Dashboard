import { useContext } from "react";
import { DashboardContext } from "../context/dashboardContext";
import { Drawer } from "@mui/material";

import Sidebar from "./Sidebar";

const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(DashboardContext);

  return (
    <Drawer
      variant="temporary"
      sx={{
        ".MuiDrawer-paper": {
          width: 280,
        },
        zIndex: "1000000000",
      }}
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <Sidebar />
    </Drawer>
  );
};

export default SidebarDrawer;
