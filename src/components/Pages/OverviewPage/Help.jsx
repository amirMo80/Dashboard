import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { EastRounded, InfoOutlined, LinkOutlined } from "@mui/icons-material";

const Help = () => {
  return (
    <>
      <Grid xs={12} md={6}>
        <Box
          sx={{
            backgroundColor: "#FFF",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
            border: "1px solid #F2F4F7",
            borderRadius: "20px",
            m: 2,
            paddingTop: "32px",
          }}
        >
          <Box
            sx={{
              width: 1,
              height: 0.2,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0px 24px",
            }}
          >
            <Box sx={{ color: "primary.main", mr: 1 }}>
              <InfoOutlined />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "primary.main",
                fontSize: ".9rem",
                fontFamily: "IRANSans-DemiBold",
              }}
            >
              مرکز راهنمایی
            </Typography>
          </Box>
          <Box sx={{ width: 1, height: 0.7, padding: "0px 24px", my: 2 }}>
            <Typography
              variant="body1"
              sx={{
                color: "text.main",
                fontSize: "1.1rem",
                fontFamily: "IRANSans-DemiBold",
                mb: 0.5,
              }}
            >
              برای فهمیدن چیزی به کمک نیاز دارید؟
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#6C737F", fontSize: ".9rem", lineHeight: "28px" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </Typography>
          </Box>
          <Box
            sx={{
              width: 1,
              height: 0.1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "12px",
              borderTop: "1px solid #F2F4F7",
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
                مرکز راهنمایی
              </Typography>
              <LinkOutlined
                sx={{
                  transform: "rotate(45deg)",
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

export default Help;
