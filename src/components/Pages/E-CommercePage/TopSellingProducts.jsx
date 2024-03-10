import {
  Box,
  Typography,
  Tooltip,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";

import { EastRounded, MoreHorizRounded } from "@mui/icons-material";

import product_1 from "../../../assets/images/product-1.png";
import product_2 from "../../../assets/images/product-2.png";
import product_3 from "../../../assets/images/product-3.jpg";
import product_4 from "../../../assets/images/product-4.png";
import product_5 from "../../../assets/images/product-5.png";

const TopSellingProducts = () => {
  return (
    <Grid xs={12} lg={4}>
      <Box
        sx={{
          m: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FFF",
          boxShadow:
            "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
          border: "1px solid #F2F4F7",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            width: 1,
            height: 0.2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            padding: "32px 24px 0px 24px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              fontFamily: "IRANSans-DemiBold",
              color: "text.main",
            }}
          >
            پر فروش ترین محصولات
          </Typography>
          <Tooltip title="گزینه های بیشتر">
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
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
            >
              <MoreHorizRounded sx={{ fontSize: "1.5rem", color: "#6c737f" }} />
            </Box>
          </Tooltip>
        </Box>
        <TableContainer sx={{ boxShadow: "none" }}>
          <Table sx={{ minWidth: 350 }}>
            <TableBody>
              <TableRow
                sx={{
                  width: 1,
                  height: 100,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #f2f4f7",
                  padding: "0px 16px",
                  "&:hover": {
                    backgroundColor: grey[100],
                  },
                }}
              >
                <TableCell sx={{ p: 0, border: "none" }}>
                  <Box
                    component="img"
                    src={product_1}
                    sx={{
                      width: 70,
                      height: 75,
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ p: 0, width: 80, border: "none" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    مراقبت های بهداشتی
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".9rem" }}
                  >
                    در لوازم جانبی
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 0, border: "none" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    13,153
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".8rem" }}
                  >
                    برای فروش
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#E5E7EB",
                    py: 0.5,
                    px: 1,
                    borderRadius: "12px",
                    border: "none",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    #1
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  width: 1,
                  height: 100,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #f2f4f7",
                  padding: "0px 16px",
                  "&:hover": {
                    backgroundColor: grey[100],
                  },
                }}
              >
                <TableCell sx={{ p: 0, border: "none" }}>
                  <Box
                    component="img"
                    src={product_2}
                    sx={{
                      width: 70,
                      height: 75,
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ p: 0, width: 80, border: "none" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    روژ آرایشی
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".9rem" }}
                  >
                    در لوازم جانبی
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 0, border: "none" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    10,500
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".8rem" }}
                  >
                    برای فروش
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#E5E7EB",
                    py: 0.5,
                    px: 1,
                    borderRadius: "12px",
                    border: "none",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    #2
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  width: 1,
                  height: 100,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #f2f4f7",
                  padding: "0px 16px",
                  "&:hover": {
                    backgroundColor: grey[100],
                  },
                }}
              >
                <TableCell sx={{ p: 0, border: "none" }}>
                  <Box
                    component="img"
                    src={product_3}
                    sx={{
                      width: 70,
                      height: 75,
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ p: 0, width: 80, border: "none" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    دمپایی پارچه ای
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".9rem" }}
                  >
                    در لوازم جانبی
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 0, border: "none" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    1,240
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".8rem" }}
                  >
                    برای فروش
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#E5E7EB",
                    py: 0.5,
                    px: 1,
                    borderRadius: "12px",
                    border: "none",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    #3
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  width: 1,
                  height: 100,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #f2f4f7",
                  padding: "0px 16px",
                  "&:hover": {
                    backgroundColor: grey[100],
                  },
                }}
              >
                <TableCell sx={{ p: 0, border: "none" }}>
                  <Box
                    component="img"
                    src={product_4}
                    sx={{
                      width: 70,
                      height: 75,
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ p: 0, width: 80, border: "none" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    کرم مراقبت پوستی
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".9rem" }}
                  >
                    در لوازم جانبی
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 0, border: "none" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    540
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".8rem" }}
                  >
                    برای فروش
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#E5E7EB",
                    py: 0.5,
                    px: 1,
                    borderRadius: "12px",
                    border: "none",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    #4
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{
                  width: 1,
                  height: 100,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #f2f4f7",
                  padding: "0px 16px",
                  "&:hover": {
                    backgroundColor: grey[100],
                  },
                }}
              >
                <TableCell sx={{ p: 0, border: "none" }}>
                  <Box
                    component="img"
                    src={product_5}
                    sx={{
                      width: 70,
                      height: 75,
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ p: 0, width: 80, border: "none" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    کرم مراقبت پوستی
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".9rem" }}
                  >
                    در لوازم جانبی
                  </Typography>
                </TableCell>
                <TableCell sx={{ p: 0, border: "none" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    244
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#6C737F", fontSize: ".8rem" }}
                  >
                    برای فروش
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#E5E7EB",
                    py: 0.5,
                    px: 1,
                    borderRadius: "12px",
                    border: "none",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.main",
                      fontSize: ".9rem",
                      fontFamily: "IRANSans-DemiBold",
                    }}
                  >
                    #5
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            width: 1,
            height: 0.1,
            display: "flex",
            justifyContent: "flex-start",
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
    </Grid>
  );
};

export default TopSellingProducts;
