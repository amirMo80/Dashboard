import {
  Box,
  Button,
  Typography,
  Tooltip,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { InfoOutlined, EastRounded } from "@mui/icons-material";

import english from "../../../assets/images/english.svg";
import spain from "../../../assets/images/spain.svg";
import russia from "../../../assets/images/russia.svg";
import canada from "../../../assets/images/canada.svg";
import german from "../../../assets/images/german.svg";
import america from "../../../assets/images/america.svg";

const DataCountries = () => {
  return (
    <>
      <Grid xs={12} xl={4}>
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
              height: 0.2,
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
                fontFamily: "IRANSans-DemiBold",
              }}
            >
              بازدید بر اساس کشور
            </Typography>
            <Tooltip title="نرخ تازه سازی 24 ساعت است">
              <InfoOutlined sx={{ color: "#6c737f", fontSize: "1.5rem" }} />
            </Tooltip>
          </Box>
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f8f9fa" }}>
                  <TableCell
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      color: "#2F3746",
                      borderColor: "#f2f4f7",
                    }}
                  >
                    کشور
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      color: "#2F3746",
                      borderColor: "#f2f4f7",
                    }}
                  >
                    مقدار
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      color: "#2F3746",
                      borderColor: "#f2f4f7",
                    }}
                  >
                    سئو
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderColor: "#f2f4f7",
                    }}
                  >
                    <Box
                      component="img"
                      src={america}
                      sx={{ mr: 1, width: 20, height: 20 }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.main",
                        fontSize: ".9rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      آمریکا
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: "#f2f4f7" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      31,200
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: "#f2f4f7" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      40%
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderColor: "#f2f4f7",
                    }}
                  >
                    <Box
                      component="img"
                      src={english}
                      sx={{ mr: 1, width: 20, height: 20 }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.main",
                        fontSize: ".9rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      انگلیس
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: "#f2f4f7" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      12,700
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: "#f2f4f7" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      47%
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderColor: "#f2f4f7",
                    }}
                  >
                    <Box
                      component="img"
                      src={russia}
                      sx={{ mr: 1, width: 20, height: 20 }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.main",
                        fontSize: ".9rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      روسیه
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: "#f2f4f7" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      10,360
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: "#f2f4f7" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      65%
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderColor: "#f2f4f7",
                    }}
                  >
                    <Box
                      component="img"
                      src={canada}
                      sx={{ mr: 1, width: 20, height: 20 }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.main",
                        fontSize: ".9rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      کانادا
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: "#f2f4f7" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      5,700
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: "#f2f4f7" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      23%
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      borderColor: "#f2f4f7",
                    }}
                  >
                    <Box
                      component="img"
                      src={german}
                      sx={{ mr: 1, width: 20, height: 20 }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.main",
                        fontSize: ".9rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      آلمان
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: "#f2f4f7" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      2,900
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ borderColor: "#f2f4f7" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      45%
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "none",
                    }}
                  >
                    <Box
                      component="img"
                      src={spain}
                      sx={{ mr: 1, width: 20, height: 20 }}
                    />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.main",
                        fontSize: ".9rem",
                        fontFamily: "IRANSans-DemiBold",
                      }}
                    >
                      اسپانیا
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      200
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "text.main", fontSize: ".9rem" }}
                    >
                      50%
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
                بیشتر ببینید
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
    </>
  );
};

export default DataCountries;
