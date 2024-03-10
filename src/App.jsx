import { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { Toaster } from "react-hot-toast";

import { DashboardContext } from "./context/dashboardContext";

import MainLayout from "./Layout/MainLayout";
import Navbar from "./components/Navbar";
import SidebarContainer from "./components/SidebarContainer";
import SearchModal from "./components/SearchModal";
import Overview from "./components/Pages/OverviewPage/Overview";
import Analytics from "./components/Pages/AnalyticsPage/Analytics";
import Page from "./components/Pages/Page";
import E_Commerce from "./components/Pages/E-CommercePage/E-Commerce";
import Crypto from "./components/Pages/Crypto/Crypto";
import Account from "./components/Pages/Account/Account";

const App = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    if (isLgUp) {
      setDrawerOpen(false);
    }
  }, [isLgUp]);

  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeValue = (value, newValue) => {
    setValue(newValue);
  };

  return (
    <DashboardContext.Provider
      value={{
        openModal,
        value,
        drawerOpen,
        setDrawerOpen,
        handleCloseModal,
        handleOpenModal,
        handleChangeValue,
      }}
    >
      <MainLayout>
        <SearchModal />
        <Grid container>
          <Grid xs={0} lg={2}>
            <SidebarContainer />
          </Grid>
          <Grid xs={12} lg={10} sx={{ position: "relative" }}>
            <Navbar />
            <Page value={value} index={0}>
              <Overview />
            </Page>
            <Page value={value} index={1}>
              <Analytics />
            </Page>
            <Page value={value} index={2}>
              <E_Commerce />
            </Page>
            <Page value={value} index={3}>
              <Crypto />
            </Page>
            <Page value={value} index={4}>
              <Account />
            </Page>
          </Grid>
        </Grid>
        <Toaster
          position="bottom-left"
          toastOptions={{
            style: {
              fontFamily: "IRANSans-Regular",
            },
          }}
        />
      </MainLayout>
    </DashboardContext.Provider>
  );
};

export default App;
