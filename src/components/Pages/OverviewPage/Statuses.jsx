import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { EastRounded } from "@mui/icons-material";

import paper from "../../../assets/images/paper.svg";
import tick from "../../../assets/images/tick.svg";
import info from "../../../assets/images/info.svg";

const Statuses = () => {
  return (
    <>
      <Grid xs={12} md={4}>
        <Box
          sx={{
            height: 180,
            m: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "#fff",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
            border: "1px solid #F2F4F7",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              width: 1,
              height: "70%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "32px 24px",
            }}
          >
            <Box component="img" src={tick} sx={{ width: 55, height: 55 }} />
            <Box component="span" sx={{ ml: 3 }}>
              <Typography
                variant="caption"
                sx={{ color: "#6c737f", fontSize: "1rem" }}
              >
                وظایف انجام شده
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mt: 0.4,
                  color: "text.main",
                  fontSize: "2rem",
                  fontFamily: "IRANSans-Bold",
                }}
              >
                31
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: 1,
              height: "30%",
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
                دیدن همه وظایف
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
      <Grid xs={12} md={4}>
        <Box
          sx={{
            height: 180,
            m: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "#fff",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
            border: "1px solid #F2F4F7",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              width: 1,
              height: "70%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "32px 24px",
            }}
          >
            <Box component="img" src={info} sx={{ width: 55, height: 55 }} />
            <Box component="span" sx={{ ml: 3 }}>
              <Typography
                variant="caption"
                sx={{ color: "#6c737f", fontSize: "1rem" }}
              >
                مسائل در حال انتظار
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mt: 0.4,
                  color: "text.main",
                  fontSize: "2rem",
                  fontFamily: "IRANSans-Bold",
                }}
              >
                12
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: 1,
              height: "30%",
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
                دیدن همه مسائل
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
      <Grid xs={12} md={4}>
        <Box
          sx={{
            height: 180,
            m: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "#fff",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
            border: "1px solid #F2F4F7",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              width: 1,
              height: "70%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "32px 24px",
            }}
          >
            <Box component="img" src={paper} sx={{ width: 55, height: 55 }} />
            <Box component="span" sx={{ ml: 3 }}>
              <Typography
                variant="caption"
                sx={{ color: "#6c737f", fontSize: "1rem" }}
              >
                بلیط های باز شده
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mt: 0.4,
                  color: "text.main",
                  fontSize: "2rem",
                  fontFamily: "IRANSans-Bold",
                }}
              >
                5
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: 1,
              height: "30%",
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
                دیدن همه بلیط ها
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

export default Statuses;
