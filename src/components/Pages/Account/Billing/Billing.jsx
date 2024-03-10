import { Box } from "@mui/material";

import { InvoiceHistory, Plans } from "./";

const Billing = () => {
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
      <Plans />
      <InvoiceHistory />
    </Box>
  );
};

export default Billing;
