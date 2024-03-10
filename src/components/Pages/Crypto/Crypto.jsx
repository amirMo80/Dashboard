import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Title from "../../Title";

import { AddRounded } from "@mui/icons-material";

import {
  BTC,
  ETH,
  Card,
  CurrentBalance,
  Operation,
  Transactions,
  Account,
} from "./";

const Crypto = () => {
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
        titleName="کریپتو"
        showBtn={true}
        btnName="اضافه به کیف پول"
        icon={<AddRounded sx={{ fontSize: "1.4rem", ml: 1 }} />}
      />
      <Grid container sx={{ width: 1, mt: 5 }}>
        <Grid xs={6} md={3.5}>
          <BTC />
        </Grid>
        <Grid xs={6} md={3.5}>
          <ETH />
        </Grid>
        <Grid xs={12} md={5}>
          <Card />
        </Grid>
      </Grid>
      <Grid container sx={{ width: 1 }}>
        <Grid xs={12} md={8}>
          <CurrentBalance />
        </Grid>
        <Grid xs={12} md={4}>
          <Operation />
        </Grid>
      </Grid>
      <Grid container sx={{ width: 1 }}>
        <Grid xs={12} md={8}>
          <Transactions />
        </Grid>
        <Grid xs={12} md={4}>
          <Account />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Crypto;
