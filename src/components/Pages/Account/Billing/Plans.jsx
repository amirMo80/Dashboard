import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import layer1 from "../../../../assets/images/layer1.svg";
import layer2 from "../../../../assets/images/layer2.svg";
import layer3 from "../../../../assets/images/layer3.svg";

import { EditOutlined } from "@mui/icons-material";

const Plans = () => {
  const handleClickPlan = (event) => {
    const plans = document.querySelectorAll(".plans");

    plans.forEach((plan) => plan.classList.remove("activeBox"));

    event.target.classList.add("activeBox");
  };

  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        boxShadow:
          "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
        border: "1px solid #F2F4F7",
        borderRadius: "20px",
        padding: "32px 24px",
        m: 2,
      }}
    >
      <Box sx={{ width: 1 }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "IRANSans-DemiBold",
            fontSize: "1.1rem",
            color: "text.main",
          }}
        >
          تغییر طرح
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: ".9rem", color: "#6c737f" }}
        >
          هر زمان که بخواهید می توانید آن را ارتقا دهید
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #F2F4F7",
          py: 3,
        }}
      >
        <Grid xs={12} sm={4}>
          <Box
            className="plans activeBox"
            onClick={handleClickPlan}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              backgroundColor: "#FFF",
              boxShadow:
                "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
              border: "1px solid #F2F4F7",
              borderRadius: "20px",
              padding: "32px 24px",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={layer1}
              sx={{
                width: 40,
                height: 40,
                objectFit: "cover",
                mb: 4,
                pointerEvents: "none",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontFamily: "IRANSans-DemiBold",
                fontSize: "2rem",
                color: "text.main",
                pointerEvents: "none",
              }}
            >
              $0.00
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1rem",
                color: "text.main",
                pointerEvents: "none",
              }}
            >
              شرکت نوپا
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={4}>
          <Box
            className="plans"
            onClick={handleClickPlan}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              backgroundColor: "#FFF",
              boxShadow:
                "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
              border: "1px solid #F2F4F7",
              borderRadius: "20px",
              padding: "32px 24px",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={layer2}
              sx={{
                width: 40,
                height: 40,
                objectFit: "cover",
                mb: 4,
                pointerEvents: "none",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontFamily: "IRANSans-DemiBold",
                fontSize: "2rem",
                color: "text.main",
                pointerEvents: "none",
              }}
            >
              $4.99
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1rem",
                color: "text.main",
                pointerEvents: "none",
              }}
            >
              استاندارد
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={4}>
          <Box
            className="plans"
            onClick={handleClickPlan}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              backgroundColor: "#FFF",
              boxShadow:
                "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
              border: "1px solid #F2F4F7",
              borderRadius: "20px",
              padding: "32px 24px",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={layer3}
              sx={{
                width: 40,
                height: 40,
                objectFit: "cover",
                mb: 4,
                pointerEvents: "none",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontFamily: "IRANSans-DemiBold",
                fontSize: "2rem",
                color: "text.main",
                pointerEvents: "none",
              }}
            >
              $29.99
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1rem",
                color: "text.main",
                pointerEvents: "none",
              }}
            >
              تجارت
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ width: 1 }}>
        <Grid xs={12}>
          <Box
            sx={{
              width: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "32px 24px 0px 24px",
            }}
          >
            <Box
              sx={{
                width: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
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
                صورت حساب
              </Typography>
              <Box
                sx={{
                  width: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    borderRadius: "12px",
                    color: "text.main",
                    ":hover": {
                      backgroundColor: "rgba(17, 25, 39, 0.04)",
                    },
                  }}
                >
                  <Typography
                    variant="button"
                    sx={{ fontFamily: "IRANSans-DemiBold" }}
                  >
                    ویرایش
                  </Typography>
                  <EditOutlined
                    sx={{
                      ml: 1,
                      fontSize: "1.4rem",
                    }}
                  />
                </Button>
              </Box>
            </Box>
            <TableContainer
              sx={{ border: "1px solid #F2F4F7", borderRadius: "8px" }}
            >
              <Table>
                <TableBody>
                  <TableRow
                    sx={{
                      display: "flex",
                      borderBottom: "1px solid #F2F4F7",
                    }}
                  >
                    <TableCell sx={{ border: "none", width: 140 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: ".9rem",
                          fontFamily: "IRANSans-DemiBold",
                          color: "text.main",
                        }}
                      >
                        نام صورت حساب
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ border: "none", width: 140 }}>
                      <Typography
                        variant="body1"
                        sx={{ fontSize: ".9rem", color: "#6c737f" }}
                      >
                        اصغر میرزایی
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      display: "flex",
                      borderBottom: "1px solid #F2F4F7",
                    }}
                  >
                    <TableCell sx={{ border: "none", width: 140 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: ".9rem",
                          fontFamily: "IRANSans-DemiBold",
                          color: "text.main",
                        }}
                      >
                        شماره کارت
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ border: "none", width: 140 }}>
                      <Typography
                        variant="body1"
                        sx={{ fontSize: ".9rem", color: "#6c737f" }}
                      >
                        1111 ****
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      display: "flex",
                      borderBottom: "1px solid #F2F4F7",
                    }}
                  >
                    <TableCell sx={{ border: "none", width: 140 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: ".9rem",
                          fontFamily: "IRANSans-DemiBold",
                          color: "text.main",
                        }}
                      >
                        کشور
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ border: "none", width: 140 }}>
                      <Typography
                        variant="body1"
                        sx={{ fontSize: ".9rem", color: "#6c737f" }}
                      >
                        آلمان
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      display: "flex",
                    }}
                  >
                    <TableCell sx={{ border: "none", width: 140 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: ".9rem",
                          fontFamily: "IRANSans-DemiBold",
                          color: "text.main",
                        }}
                      >
                        کد پستی
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ border: "none", width: 140 }}>
                      <Typography
                        variant="body1"
                        sx={{ fontSize: ".9rem", color: "#6c737f" }}
                      >
                        667458
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Typography
              variant="body1"
              sx={{ fontSize: ".9rem", color: "#6c737f", my: 3 }}
            >
              پس از خرید اشتراک نمی‌توانیم وجه را بازپرداخت کنیم، اما همیشه
              می‌توانید آن را{" "}
              <Box
                component="span"
                sx={{ color: "#6366F1", cursor: "pointer" }}
              >
                لغو
              </Box>{" "}
              کنید.
            </Typography>
            <Button
              sx={{
                width: 110,
                height: 40,
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
              ارتقا طرح
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Plans;
