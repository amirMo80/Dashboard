import {
  Events,
  Features,
  Help,
  Inbox,
  Jobs,
  Statuses,
  Subscribe,
  Tips,
  Transactions,
} from ".";
import Grid from "@mui/material/Unstable_Grid2";

import Title from "../../Title";
import { Box } from "@mui/material";

import { AddRounded } from "@mui/icons-material";

const Overview = () => {
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
        titleName="نمای کلی"
        btnName="داشبورد جدید"
        showBtn={true}
        icon={<AddRounded sx={{ fontSize: "1.4rem", ml: 1 }} />}
      />
      <Grid
        container
        sx={{
          width: 1,
          mt: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Statuses />
      </Grid>
      <Grid container sx={{ my: 2, width: 1 }}>
        <Features />
        <Tips />
      </Grid>
      <Grid container sx={{ width: 1 }}>
        <Subscribe />
        <Inbox />
      </Grid>
      <Grid container sx={{ width: 1 }}>
        <Transactions />
        <Events />
      </Grid>
      <Grid container sx={{ width: 1 }}>
        <Jobs />
        <Help />
      </Grid>
    </Box>
  );
};

export default Overview;
