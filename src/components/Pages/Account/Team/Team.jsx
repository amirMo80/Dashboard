import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import { MailOutlineRounded, MoreHorizOutlined } from "@mui/icons-material";

import { grey } from "@mui/material/colors";

import avatar1 from "../../../../assets/images/avatar2.png";
import avatar2 from "../../../../assets/images/avatar4.png";

const Team = () => {
  const theme = useTheme();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        <Box
          sx={{
            width: 1,
            display: "flex",
            flexDirection: isMdDown ? "column" : "row",
            justifyContent: isMdDown ? "center" : "space-between",
            alignItems: "center",
            padding: "0px 24px",
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: isMdDown ? 1 : 0.3,
              mb: isMdDown ? 3 : 0,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "IRANSans-DemiBold",
                fontSize: "1.1rem",
                color: "text.main",
                mb: 1,
              }}
            >
              دعوت از اعضا
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: ".9rem", color: "#6c737f" }}
            >
              شما در حال حاضر برای 2 صندلی ویرایشگر می پردازید.
            </Typography>
          </Box>
          <Box
            sx={{
              width: isMdDown ? 1 : 0.6,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              sx={{
                width: 1,
                mr: 2,
                color: "text.main",
                "&:hover": {
                  backgroundColor: grey[100],
                },
              }}
              variant="outlined"
              InputProps={{
                readOnly: false,
                startAdornment: (
                  <Box
                    sx={{
                      width: 120,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ fontSize: ".8rem", color: "#6c737f" }}
                    >
                      آدرس ایمیل
                    </Typography>
                    <MailOutlineRounded
                      sx={{ fontSize: "1.4rem", color: "#6c737f" }}
                    />
                  </Box>
                ),
              }}
            />
            <Button
              sx={{
                width: 140,
                height: isMdDown ? 50 : 40,
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
              ارسال دعوت
            </Button>
          </Box>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F2F4F7" }}>
                <TableCell sx={{ borderBottom: "1px solid #F2F4F7" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                      color: "text.main",
                    }}
                  >
                    اعضا
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderBottom: "1px solid #F2F4F7" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                      color: "text.main",
                    }}
                  >
                    نقش
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{ borderBottom: "1px solid #F2F4F7" }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderBottom: "1px solid #F2F4F7",
                  }}
                >
                  <Box
                    component="img"
                    src={avatar1}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      objectFit: "cover",
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "IRANSans-DemiBold",
                        fontSize: ".9rem",
                        color: "text.main",
                        mb: 0.5,
                      }}
                    >
                      رضا اسماعیلی
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: ".8rem",
                        color: "#6c737f",
                      }}
                    >
                      reza@gmail.com
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ borderBottom: "1px solid #F2F4F7" }}>
                  <Box
                    sx={{
                      width: 60,
                      p: 0.2,
                      borderRadius: "48px",
                      backgroundColor: "#ECECFD",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: "IRANSans-DemiBold",
                        fontSize: ".8rem",
                        color: "#4338CA",
                      }}
                    >
                      مالک
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{ width: 80, borderBottom: "1px solid #F2F4F7" }}
                >
                  <MoreHorizOutlined
                    sx={{ fontSize: "1.6rem", color: "#6c737f" }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <Box
                    component="img"
                    src={avatar2}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      objectFit: "cover",
                      mr: 2,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "IRANSans-DemiBold",
                        fontSize: ".9rem",
                        color: "text.main",
                        mb: 0.5,
                      }}
                    >
                      مهران اصغری
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: ".8rem",
                        color: "#6c737f",
                      }}
                    >
                      mehran@gmail.com
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ border: "none" }}>
                  <Box
                    sx={{
                      width: 60,
                      p: 0.2,
                      borderRadius: "48px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: "IRANSans-DemiBold",
                        fontSize: ".8rem",
                        color: "text.main",
                      }}
                    >
                      استاندارد
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ width: 80, border: "none" }}>
                  <MoreHorizOutlined
                    sx={{ fontSize: "1.6rem", color: "#6c737f" }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Team;
