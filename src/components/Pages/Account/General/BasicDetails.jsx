import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { grey } from "@mui/material/colors";

import avatar from "../../../../assets/images/avatar.png";

const BasicDetails = () => {
  const theme = useTheme();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        flexDirection: isMdDown ? "column" : "row",
        justifyContent: isMdDown ? "center" : "space-between",
        alignItems: isMdDown ? "flex-start" : "flex-start",
        backgroundColor: "#FFF",
        boxShadow:
          "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
        border: "1px solid #F2F4F7",
        borderRadius: "20px",
        padding: "32px 24px",
        my: 2,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          width: isMdDown ? 1 : 0.3,
          fontFamily: "IRANSans-DemiBold",
          fontSize: "1.1rem",
          color: "text.main",
          mb: isMdDown ? 4 : 0,
        }}
      >
        جزئیات اولیه
      </Typography>
      <Box
        sx={{
          width: isMdDown ? 1 : 0.7,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box
            component="img"
            src={avatar}
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              objectFit: "cover",
              outline: "1px dashed #D6DADE",
              outlineOffset: "6px",
              mr: 4,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
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
                تغییر
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <TextField
            sx={{
              width: 1,
              mr: 4,
              color: "text.main",
              "&:hover": {
                backgroundColor: grey[100],
              },
            }}
            variant="outlined"
            InputProps={{
              readOnly: true,
              startAdornment: (
                <Box
                  sx={{
                    width: 1,
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
                    نام کامل
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                      color: "text.main",
                    }}
                  >
                    پیمان اکبری
                  </Typography>
                </Box>
              ),
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
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
                ذخیره
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            disabled
            sx={{
              width: 1,
              mr: 4,
              color: "text.main",
              "&:hover": {
                backgroundColor: grey[100],
              },
            }}
            variant="outlined"
            InputProps={{
              readOnly: true,
              startAdornment: (
                <Box
                  sx={{
                    width: 1,
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
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "IRANSans-DemiBold",
                      fontSize: ".9rem",
                      color: "text.main",
                    }}
                  >
                    peyman@gmail.com
                  </Typography>
                </Box>
              ),
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
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
                ویرایش
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BasicDetails;
