import { Box, Typography } from "@mui/material";

import { NumericFormat } from "react-number-format";

const CurrencyTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          minWidth: 120,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          background: "#111927b0",
          borderRadius: "4px",
          overflow: "hidden",
          padding: "8px",
        }}
      >
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: `${payload[0].payload.fill}`,
            mr: 1,
          }}
        />

        <Typography variant="subtitle2" sx={{ fontSize: "12px", ml: 1 }}>
          {`${payload[0].payload.name}:  `}
          <NumericFormat
            displayType="text"
            thousandSeparator=","
            thousandsGroupStyle="lakh"
            suffix={'$'}
            value={`${payload[0].value} $`}
          />
        </Typography>
      </Box>
    );
  }

  return null;
};

export default CurrencyTooltip;
