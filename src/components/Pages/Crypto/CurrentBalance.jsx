import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Pie, PieChart, Tooltip , Cell } from "recharts";
import { EastRounded } from "@mui/icons-material";

import { CurrencyTooltip } from "./";

const CurrentBalance = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const COLORS = ["#06aed4", "#6366f1", "#f79009"];

  const currencyData = [
    {
      name: "اتریوم",
      number: 962680,
    },
    {
      name: "دلار آمریکا",
      number: 1007681,
    },

    {
      name: "بیتکوین",
      number: 1621320,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        m: 2,
        backgroundColor: "#FFF",
        boxShadow:
          "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
        border: "1px solid #F2F4F7",
        borderRadius: "20px",
      }}
    >
      <Box sx={{ width: 1, padding: "32px 16px 16px 16px" }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "IRANSans-DemiBold",
            fontSize: "1.1rem",
            color: "text.main",
          }}
        >
          تراز جاری
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#6c737f", fontSize: ".8rem" }}
        >
          موجودی در همه حساب های شما
        </Typography>
      </Box>
      <Box
        sx={{
          width: 1,
          display: "flex",
          flexDirection: isMdDown ? "column" : "row",
          justifyContent: isMdDown ? "center" : "space-between",
          alignItems: isMdDown ? "center" : "center",
          padding: "32px 16px",
        }}
      >
        <Box sx={{ width: 0.4 }}>
          <PieChart width={180} height={180}>
            <Tooltip content={CurrencyTooltip} />
            <Pie
              cy="50%"
              cx="50%"
              data={currencyData}
              startAngle={0}
              endAngle={360}
              innerRadius={60}
              outerRadius={90}
              dataKey="number"
              stroke="none"
            >
              {currencyData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </Box>
        <Box
          sx={{
            width: isMdDown ? 1 : 0.6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="body2"
              sx={{ fontSize: ".8rem", color: "#6c737f", mb: 2 }}
            >
              موجودی کل
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "IRANSans-Bold",
                fontSize: "2rem",
                color: "text.main",
              }}
            >
              $35,916,81
            </Typography>
          </Box>
          <Box sx={{ width: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "IRANSans-DemiBold",
                fontSize: ".9rem",
                color: "#6c737f",
                mb: 2,
              }}
            >
              ارز در دسترس
            </Typography>
            <Box
              sx={{
                width: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: 1,
                  my: 0.5,
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
                    sx={{
                      width: 14,
                      height: 14,
                      borderRadius: "2px",
                      backgroundColor: "#F79009",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                      color: "text.main",
                      ml: 1,
                    }}
                  >
                    بیتکوین
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: ".9rem", color: "#6c737f" }}
                >
                  $16,213.20
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 1,
                  my: 0.5,
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
                    sx={{
                      width: 14,
                      height: 14,
                      borderRadius: "2px",
                      backgroundColor: "#06AED4",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                      color: "text.main",
                      ml: 1,
                    }}
                  >
                    اتریوم
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: ".9rem", color: "#6c737f" }}
                >
                  $9,626.80
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 1,
                  my: 0.5,
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
                    sx={{
                      width: 14,
                      height: 14,
                      borderRadius: "2px",
                      backgroundColor: "#6366F1",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                      color: "text.main",
                      ml: 1,
                    }}
                  >
                    دلار آمریکا
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: ".9rem", color: "#6c737f" }}
                >
                  $10,076.81
                </Typography>
              </Box>
            </Box>
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
        }}
      >
        <Box
          sx={{
            minWidth: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "1px solid #F2F4F7",
            padding: "8px",
          }}
        >
          <Button
            sx={{
              borderRadius: "12px",
              color: "text.main",
              ":hover": { backgroundColor: "rgba(17, 25, 39, 0.04)" },
            }}
          >
            <Typography
              variant="button"
              sx={{ fontFamily: "IRANSans-DemiBold" }}
            >
              اضافه کردن وجوه
            </Typography>
            <EastRounded
              sx={{
                transform: "rotate(-135deg)",
                ml: 1,
                fontSize: "1.2rem",
              }}
            />
          </Button>
        </Box>
        <Box
          sx={{
            minWidth: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "1px solid #F2F4F7",
            padding: "8px",
          }}
        >
          <Button
            sx={{
              borderRadius: "12px",
              color: "text.main",
              ":hover": { backgroundColor: "rgba(17, 25, 39, 0.04)" },
            }}
          >
            <Typography
              variant="button"
              sx={{ fontFamily: "IRANSans-DemiBold" }}
            >
              انتقال وجوه
            </Typography>
            <EastRounded
              sx={{
                transform: "rotate(-225deg)",
                ml: 1,
                fontSize: "1.2rem",
              }}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentBalance;
