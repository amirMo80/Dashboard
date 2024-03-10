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
import Grid from "@mui/material/Unstable_Grid2";

import { InfoOutlined, OpenInNewOutlined } from "@mui/icons-material";

const MostVisitedPages = () => {
  return (
    <>
      <Grid xs={12} lg={8}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
            border: "1px solid #F2F4F7",
            borderRadius: "20px",
            m: 2,
          }}
        >
          <Box
            component="span"
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "32px 24px 16px 24px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "text.main",
                fontSize: "1.1rem",
                fontFamily: "IRANSans-Demibold",
              }}
            >
              صفحات پربازدید
            </Typography>
            <InfoOutlined sx={{ color: "#6c737f", fontSize: "1.5rem" }} />
          </Box>
          <TableContainer>
            <Table sx={{ minWidth: 600 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
                  <TableCell
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      color: "#2F3746",
                      borderColor: "#f2f4f7",
                      fontSize: ".9rem",
                    }}
                  >
                    نام صفحه
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      color: "#2F3746",
                      borderColor: "#f2f4f7",
                      fontSize: ".9rem",
                    }}
                  >
                    بازدید کنندگان
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      color: "#2F3746",
                      borderColor: "#f2f4f7",
                      fontSize: ".9rem",
                    }}
                  >
                    بازدید از صفحه منحصر به فرد
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      color: "#2F3746",
                      borderColor: "#f2f4f7",
                      fontSize: ".9rem",
                    }}
                  >
                    نرخ جهش
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    <Box
                      component="span"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <OpenInNewOutlined
                        sx={{
                          mr: 1.5,
                          fontSize: "1.2rem",
                        }}
                      />
                      <Box
                        component="a"
                        href="#"
                        variant="subtitle2"
                        sx={{
                          direction: "ltr",
                          color: "text.main",
                          textDecoration: "none",
                        }}
                      >
                        /
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    95,847
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    8,584
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    16%
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    <Box
                      component="span"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <OpenInNewOutlined
                        sx={{
                          mr: 1.5,
                          fontSize: "1.2rem",
                        }}
                      />
                      <Box
                        component="a"
                        href="#"
                        variant="subtitle2"
                        sx={{
                          direction: "ltr",
                          color: "text.main",
                          textDecoration: "none",
                        }}
                      >
                        /auth/login
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    7,500
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    648
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    5%
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    <Box
                      component="span"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <OpenInNewOutlined
                        sx={{
                          mr: 1.5,
                          fontSize: "1.2rem",
                        }}
                      />
                      <Box
                        component="a"
                        href="#"
                        variant="subtitle2"
                        sx={{
                          direction: "ltr",
                          color: "text.main",
                          textDecoration: "none",
                        }}
                      >
                        /dashboard
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    85,406
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    568
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    2%
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    <Box
                      component="span"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <OpenInNewOutlined
                        sx={{
                          mr: 1.5,
                          fontSize: "1.2rem",
                        }}
                      />
                      <Box
                        component="a"
                        href="#"
                        variant="subtitle2"
                        sx={{
                          direction: "ltr",
                          color: "text.main",
                          textDecoration: "none",
                        }}
                      >
                        /blog/top-5-react-frameworks
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    75,050
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    12,322
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    12%
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    <Box
                      component="span"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <OpenInNewOutlined
                        sx={{
                          mr: 1.5,
                          fontSize: "1.2rem",
                        }}
                      />
                      <Box
                        component="a"
                        href="#"
                        variant="subtitle2"
                        sx={{
                          direction: "ltr",
                          color: "text.main",
                          textDecoration: "none",
                        }}
                      >
                        /blog/understand-programming-principles
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    68,003
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    11,645
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    10%
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    <Box
                      component="span"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <OpenInNewOutlined
                        sx={{
                          mr: 1.5,
                          fontSize: "1.2rem",
                        }}
                      />
                      <Box
                        component="a"
                        href="#"
                        variant="subtitle2"
                        sx={{
                          direction: "ltr",
                          color: "text.main",
                          textDecoration: "none",
                        }}
                      >
                        /blog/design-patterns
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    49,510
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    10,259
                  </TableCell>
                  <TableCell
                    sx={{ borderColor: "#f2f4f7", color: "text.main" }}
                  >
                    8%
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

export default MostVisitedPages;
