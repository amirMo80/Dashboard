import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Title from "../../Title";

import {
  AnalyticsData,
  DataCountries,
  MostVisitedPages,
  SocialMedia,
  TrafficSources,
} from "./";
import { AddRounded } from "@mui/icons-material";

const Analytics = () => {
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
        titleName="تجزیه و تحلیل"
        showBtn={true}
        btnName="داشبورد جدید"
        icon={<AddRounded sx={{ fontSize: "1.4rem", ml: 1 }} />}
      />
      <Grid container sx={{ width: 1, mt: 5 }}>
        <AnalyticsData />
      </Grid>
      <Grid container sx={{ width: 1 }}>
        <TrafficSources />
        <DataCountries />
      </Grid>
      <Grid container sx={{ width: 1 }}>
        <MostVisitedPages />
        <SocialMedia />
      </Grid>
    </Box>
  );
};

export default Analytics;
