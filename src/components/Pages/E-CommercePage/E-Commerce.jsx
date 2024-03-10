import { Box } from "@mui/material";

import {
  SalesCountry,
  SalesRevenue,
  Stats,
  TopChannels,
  TopSellingProducts,
} from "./";

import Grid from "@mui/material/Unstable_Grid2";
import { RefreshOutlined } from "@mui/icons-material";

import Title from "../../Title";

const E_Commerce = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title
        titleName="داده ها"
        btnName="همگام سازی"
        showBtn={true}
        icon={<RefreshOutlined sx={{ fontSize: "1.4rem", ml: 1 }} />}
      />
      <Grid container sx={{ width: 1, mt: 5 }}>
        <Grid xs={12} lg={8}>
          <Stats />
          <SalesRevenue />
        </Grid>
        <TopSellingProducts />
      </Grid>
      <Grid container sx={{ width: 1 }}>
        <SalesCountry />
        <TopChannels />
      </Grid>
    </Box>
  );
};

export default E_Commerce;
