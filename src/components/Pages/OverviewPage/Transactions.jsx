import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

const Transactions = () => {
  return (
    <>
      <Grid xs={12} md={7}>
        <Box
          sx={{
            backgroundColor: "#FFF",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
            border: "1px solid #F2F4F7",
            borderRadius: "20px",
            paddingTop: "32px",
            m: 2,
            overflow: "hidden",
          }}
        >
          <Box sx={{ padding: "0px 24px", mb: 0.5 }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "IRANSans-DemiBold",
                fontSize: "1.1rem",
                color: "text.main",
              }}
            >
              آخرین معاملات
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "rgb(108, 115, 127)", fontSize: ".8rem" }}
            >
              بر اساس دوره انتخابی
            </Typography>
          </Box>
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table sx={{ minWidth: 600 }}>
              <TableHead>
                <TableRow
                  sx={{
                    width: 260,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0px 24px",
                  }}
                >
                  <TableCell
                    sx={{ border: "none", padding: "0px", cursor: "pointer" }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "primary.main",
                        fontFamily: "IRANSans-DemiBold",
                        fontSize: ".9rem",
                        borderBottom: "2px solid #6366F1",
                        py: 2,
                      }}
                    >
                      همه
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ border: "none", padding: "0px", cursor: "pointer" }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: "IRANSans-DemiBold",
                        fontSize: ".9rem",
                        color: "#6C737F",
                        py: 2,
                      }}
                    >
                      تایید شده
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ border: "none", padding: "0px", cursor: "pointer" }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: "IRANSans-DemiBold",
                        fontSize: ".9rem",
                        color: "#6C737F",
                        py: 2,
                      }}
                    >
                      در حال بررسی
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{
                    minWidth: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid #F2F4F7",
                    padding: "0px 24px",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#F3F4F6",
                      py: 0.5,
                      px: 1,
                      borderRadius: "18px",
                      border: "none",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      مرداد
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontFamily: "IRANSans-DemiBold",
                        color: "text.main",
                        fontSize: "1.2rem",
                      }}
                    >
                      15
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "text.main",
                        fontSize: ".9rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      داریوش
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#6C737F", fontSize: ".9rem" }}
                    >
                      پرداخت دریافت شد
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 75,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      py: 0.4,
                      px: 0.8,
                      borderRadius: "28px",
                      backgroundColor: "#FEF2E1",
                      color: "#BE5E26",
                      border: "none",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: ".8rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      در انتظار
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#10B981", fontSize: "1rem" }}
                    >
                      2,000,000 ریال +
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{
                    width: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid #F2F4F7",
                    padding: "0px 24px",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#F3F4F6",
                      py: 0.5,
                      px: 1,
                      borderRadius: "18px",
                      border: "none",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      مرداد
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontFamily: "IRANSans-DemiBold",
                        color: "text.main",
                        fontSize: "1.2rem",
                      }}
                    >
                      14
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "text.main",
                        fontSize: ".9rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      مینا
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#6C737F", fontSize: ".9rem" }}
                    >
                      پرداخت ارسال شد
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 75,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      py: 0.4,
                      px: 0.8,
                      borderRadius: "28px",
                      backgroundColor: "#E2F6F0",
                      color: "#248F6C",
                      border: "none",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: ".8rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      تاییده شده
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#F04438", fontSize: "1rem" }}
                    >
                      1,000,000 ریال +
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{
                    width: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid #F2F4F7",
                    padding: "0px 24px",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#F3F4F6",
                      py: 0.5,
                      px: 1,
                      borderRadius: "18px",
                      border: "none",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      مرداد
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontFamily: "IRANSans-DemiBold",
                        color: "text.main",
                        fontSize: "1.2rem",
                      }}
                    >
                      14
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "text.main",
                        fontSize: ".9rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      پرهام
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#6C737F", fontSize: ".9rem" }}
                    >
                      پرداخت ارسال شد
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 75,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      py: 0.4,
                      px: 0.8,
                      borderRadius: "28px",
                      backgroundColor: "#FDE8E7",
                      color: "#BF4239",
                      border: "none",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: ".8rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      ناموفق
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#F04438", fontSize: "1rem" }}
                    >
                      3,000,000 ریال +
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{
                    width: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid #F2F4F7",
                    padding: "0px 24px",
                    "&:hover": {
                      backgroundColor: "#F3F4F6",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#F3F4F6",
                      py: 0.5,
                      px: 1,
                      borderRadius: "18px",
                      border: "none",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      مرداد
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontFamily: "IRANSans-DemiBold",
                        color: "text.main",
                        fontSize: "1.2rem",
                      }}
                    >
                      12
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "text.main",
                        fontSize: ".9rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      داریوش
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#6C737F", fontSize: ".9rem" }}
                    >
                      پرداخت دریافت شد
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 75,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      py: 0.4,
                      px: 0.8,
                      borderRadius: "28px",
                      backgroundColor: "#E2F6F0",
                      color: "#248F6C",
                      border: "none",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: ".8rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      تایید شده
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#10B981", fontSize: "1rem" }}
                    >
                      49,000,000 ریال +
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </>
  );
};

export default Transactions;
