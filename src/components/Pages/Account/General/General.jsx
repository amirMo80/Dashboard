import { Box } from "@mui/material";
import { BasicDetails, DeleteAccount, Profile } from "./";

const General = () => {
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
      <BasicDetails />
      <Profile />
      <DeleteAccount />
    </Box>
  );
};

export default General;
