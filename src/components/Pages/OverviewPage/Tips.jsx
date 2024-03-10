import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import nextTip from "../../../assets/images/next-tip.svg";

const Tips = () => {
  const handleChangeTip = (event) => {
    const dots = document.querySelectorAll(".dots");
    const tips = document.querySelectorAll(".tips");

    dots.forEach((dot) => dot.classList.remove("activeDots"));
    event.target.classList.add("activeDots");

    tips.forEach((tip) => tip.classList.remove("activeTips"));

    tips[event.target.dataset.index].classList.add("activeTips");
  };

  return (
    <>
      <Grid xs={12} md={5}>
        <Box
          sx={{
            height: 260,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            overflow: "hidden",
            mx: 2,
            mb: 2,
            padding: "32px",
            borderRadius: "20px",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px",
          }}
        >
          <Box component="img" src={nextTip} sx={{ width: 140, mb: 2 }} />
          <Box
            sx={{
              width: 70,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              component="button"
              onClick={handleChangeTip}
              data-index={0}
              className="activeDots dots"
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                border: "none",
                outline: "none",
                opacity: 0.25,
                cursor: "pointer",
                ":hover": {
                  opacity: 1,
                },
              }}
            />
            <Box
              component="button"
              onClick={handleChangeTip}
              data-index={1}
              className="dots"
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                border: "none",
                outline: "none",
                opacity: 0.25,
                cursor: "pointer",
                ":hover": {
                  opacity: 1,
                },
              }}
            />
            <Box
              component="button"
              onClick={handleChangeTip}
              data-index={2}
              className="dots"
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                border: "none",
                outline: "none",
                opacity: 0.25,
                cursor: "pointer",
                ":hover": {
                  opacity: 1,
                },
              }}
            />
          </Box>
          <Box className="tips activeTips" sx={{ display: "none" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                fontFamily: "IRANSans-DemiBold",
                mt: 3,
                mb: 1,
                color: "text.main",
              }}
            >
              طراحی جدید و تازه
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgb(108, 115, 127)", fontSize: ".9rem" }}
            >
              الگوی مورد علاقه شما ظاهری شیک و جدید، گزینه‌های سفارشی‌سازی
              بیشتر، صفحه‌نمایش و موارد دیگر دارد.
            </Typography>
          </Box>
          <Box className="tips" sx={{ display: "none" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                fontFamily: "IRANSans-DemiBold",
                mt: 3,
                mb: 1,
                color: "text.main",
              }}
            >
              لورم ایپسوم 2
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgb(108, 115, 127)", fontSize: ".9rem", mt: 1 }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </Typography>
          </Box>
          <Box className="tips" sx={{ display: "none" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                fontFamily: "IRANSans-DemiBold",
                mt: 3,
                mb: 1,
                color: "text.main",
              }}
            >
              لورم ایپسوم 3
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgb(108, 115, 127)", fontSize: ".9rem", mt: 1 }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Tips;
