import { Box, Typography, TextField, Button } from "@mui/material";
import { SyncAltRounded } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import ethIcon from "../../../assets/images/eth.svg";
import btcIcon from "../../../assets/images/btc.svg";

const Operation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        m: 2,
        backgroundColor: "#FFF",
        boxShadow:
          "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
        border: "1px solid #F2F4F7",
        borderRadius: "20px",
        padding: "32px 24px",
      }}
    >
      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "IRANSans-DemiBold",
            fontSize: "1.1rem",
            color: "text.main",
          }}
        >
          عملکرد
        </Typography>
        <Box
          sx={{
            width: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "primary.main",
              fontFamily: "IRANSans-DemiBold",
              borderBottom: "2px solid #6366F1",
              pb: 0.5,
              cursor: "pointer",
            }}
          >
            خرید
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontFamily: "IRANSans-DemiBold",
              cursor: "pointer",
              color: "text.main",
            }}
          >
            فروش
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px 0px",
        }}
      >
        <TextField
          sx={{
            width: 1,
            color: "text.main",
            "&:hover": {
              backgroundColor: grey[100],
            },
          }}
          variant="outlined"
          defaultValue={"0.4567"}
          InputProps={{
            readOnly: true,
            startAdornment: (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 1,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: ".9rem", color: "#6c737f" }}
                >
                  از
                </Typography>
                <Box
                  component="img"
                  sx={{ width: 24, height: 24 }}
                  src={ethIcon}
                />
              </Box>
            ),
          }}
        />
        <Box
          component="span"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
            width: 40,
            height: 40,
            color: "text.main",
            borderRadius: "50%",
            cursor: "pointer",
            transform: "rotate(90deg)",
            my: 1,
            "&:hover": {
              backgroundColor: grey[100],
            },
          }}
        >
          <SyncAltRounded sx={{ fontSize: "1.5rem", color: "#6c737f" }} />
        </Box>
        <TextField
          sx={{
            width: 1,
            color: "text.main",
            "&:hover": {
              backgroundColor: grey[100],
            },
          }}
          variant="outlined"
          defaultValue={"5.9093"}
          InputProps={{
            readOnly: true,
            startAdornment: (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 1,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: ".9rem", color: "#6c737f" }}
                >
                  به
                </Typography>
                <Box
                  component="img"
                  sx={{ width: 24, height: 24 }}
                  src={btcIcon}
                />
              </Box>
            ),
          }}
        />
      </Box>
      <Box sx={{ width: 1 }}>
        <Typography variant="body1" sx={{ fontSize: "1rem", color: "#6c737f" }}>
          1 بیت کوین = $20,024,90
        </Typography>
      </Box>
      <Button
        sx={{
          width: 1,
          height: 52,
          mt: 2,
          fontFamily: "IRANSans-DemiBold",
          boxShadow: "none",
          borderRadius: ".6rem",
          ":hover": {
            boxShadow: "none",
          },
        }}
        variant="contained"
        color="primary"
      >
        خرید بیتکوین
      </Button>
    </Box>
  );
};

export default Operation;
