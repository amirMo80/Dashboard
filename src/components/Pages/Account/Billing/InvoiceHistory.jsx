import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const InvoiceHistory = () => {
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
        padding: "32px 0px 0px 0px",
        m: 2,
      }}
    >
      <Box sx={{ width: 1, mb: 3, padding: "0px 24px" }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "IRANSans-DemiBold",
            fontSize: "1.1rem",
            color: "text.main",
          }}
        >
          تاریخچه فاکتور
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: ".9rem", color: "#6c737f" }}
        >
          شما می توانید تمام فاکتورهای قبلی خود را از اینجا مشاهده و دانلود
          کنید. اگر به تازگی پرداختی انجام داده اید، ممکن است چند ساعت طول بکشد
          تا در جدول زیر ظاهر شود.
        </Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F2F4F7" }}>
              <TableCell sx={{ borderBottom: "1px solid #F2F4F7" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: ".9rem",
                    fontFamily: "IRANSans-DemiBold",
                    color: "text.main",
                  }}
                >
                  تاریخ
                </Typography>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #F2F4F7" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: ".9rem",
                    fontFamily: "IRANSans-DemiBold",
                    color: "text.main",
                  }}
                >
                  مجموع
                </Typography>
              </TableCell>
              <TableCell
                sx={{ width: 160, borderBottom: "1px solid #F2F4F7" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ borderBottom: "1px solid #F2F4F7" }}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: ".9rem", color: "text.main" }}
                >
                  22 اکتبر 2023
                </Typography>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #F2F4F7" }}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: ".9rem", color: "text.main" }}
                >
                  $4.99
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid #F2F4F7",
                  textAlign: "center",
                  "&.MuiTableCell-root": {
                    padding: "0px",
                  },
                }}
              >
                <Box
                  component="a"
                  href="#"
                  variant="body1"
                  sx={{
                    fontSize: ".9rem",
                    color: "text.main",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  مشاهده صورت حساب
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ borderBottom: "1px solid #F2F4F7" }}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: ".9rem", color: "text.main" }}
                >
                  22 سپتامبر 2023
                </Typography>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #F2F4F7" }}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: ".9rem", color: "text.main" }}
                >
                  $4.99
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid #F2F4F7",
                  textAlign: "center",
                  "&.MuiTableCell-root": {
                    padding: "0px",
                  },
                }}
              >
                <Box
                  component="a"
                  href="#"
                  variant="body1"
                  sx={{
                    fontSize: ".9rem",
                    color: "text.main",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  مشاهده صورت حساب
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "none" }}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: ".9rem", color: "text.main" }}
                >
                  22 آگوست 2023
                </Typography>
              </TableCell>
              <TableCell sx={{ border: "none" }}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: ".9rem", color: "text.main" }}
                >
                  $4.99
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  border: "none",
                  textAlign: "center",
                  "&.MuiTableCell-root": {
                    padding: "0px",
                  },
                }}
              >
                <Box
                  component="a"
                  href="#"
                  variant="body1"
                  sx={{
                    fontSize: ".9rem",
                    color: "text.main",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  مشاهده صورت حساب
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InvoiceHistory;
