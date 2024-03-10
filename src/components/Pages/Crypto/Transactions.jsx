import { Box, Typography, Button } from "@mui/material";
import { EastRounded } from "@mui/icons-material";

const Transactions = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        m: 2,
        backgroundColor: "#FFF",
        boxShadow:
          "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
        border: "1px solid #F2F4F7",
        borderRadius: "20px",
        padding: "32px 0px 0px 0px",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          width: 1,
          fontFamily: "IRANSans-DemiBold",
          fontSize: "1.1rem",
          color: "text.main",
          padding: "0px 24px",
          mb: 2,
        }}
      >
        معاملات
      </Typography>
      <Box
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px 24px",
          borderBottom: "1px solid #F2F4F7",
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
                transform: "rotate(225deg)",
                my: 1,
                mr: 2,
                backgroundColor: "#F6FCFA",
              }}
            >
              <EastRounded sx={{ fontSize: "1.5rem", color: "#10B981" }} />
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "IRANSans-DemiBold",
                  fontSize: "1rem",
                  color: "text.main",
                }}
              >
                خرید بیتکوین
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: ".9rem", color: "#6c737f", my: 0.5 }}
              >
                11.15.2023 / 10:36 صبح
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "1rem", color: "#10B981" }}
            >
              0.1337 BTC +
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: ".9rem", color: "#6c737f", my: 0.5 }}
            >
              $4,805.00
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px 24px",
          borderBottom: "1px solid #F2F4F7",
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
                transform: "rotate(135deg)",
                my: 1,
                mr: 2,
                backgroundColor: "#FEF8F7",
              }}
            >
              <EastRounded sx={{ fontSize: "1.5rem", color: "#F04438" }} />
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "IRANSans-DemiBold",
                  fontSize: "1rem",
                  color: "text.main",
                }}
              >
                فروش بیتکوین
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: ".9rem", color: "#6c737f", my: 0.5 }}
              >
                11.10.2023 / 09:47 صبح
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "1rem", color: "#F04438" }}
            >
              0.2105 BTC -
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: ".9rem", color: "#6c737f", my: 0.5 }}
            >
              $2,344.00
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: 1,
          height: 0.1,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "12px",
          borderTop: "1px solid #F2F4F7",
        }}
      >
        <Button
          sx={{
            borderRadius: "12px",
            color: "text.main",
            ":hover": { backgroundColor: "rgba(17, 25, 39, 0.04)" },
          }}
        >
          <Typography variant="button" sx={{ fontFamily: "IRANSans-DemiBold" }}>
            دیدن همه
          </Typography>
          <EastRounded
            sx={{
              transform: "rotate(180deg)",
              ml: 1,
              fontSize: "1.2rem",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default Transactions;
