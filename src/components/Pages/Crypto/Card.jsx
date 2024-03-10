import { Box, Typography } from "@mui/material";

import masterCard from "../../../assets/images/mastercard-1.png";
import visaCard from "../../../assets/images/card-visa.png";
import contactLess from "../../../assets/images/contactless.svg";
import masterCardLogo from "../../../assets/images/logo-mastercard.svg";
import visaCardLogo from "../../../assets/images/logo-visa.svg";
import sim from "../../../assets/images/sim.svg";

const Card = () => {
  const handleClickCard = (event) => {
    const dots = document.querySelectorAll(".dots");

    const cards = document.querySelectorAll(".card");

    dots.forEach((dot) => dot.classList.remove("activeDots"));
    event.target.classList.add("activeDots");

    cards.forEach((card) => card.classList.remove("activeCard"));

    cards[event.target.dataset.index].classList.add("activeCard");
  };

  return (
    <Box
      sx={{
        height: 300,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        m: 2,
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 16,
          left: 24,
          zIndex: 9999,
        }}
      >
        <Box
          onClick={handleClickCard}
          className="dots activeDots"
          data-index={0}
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#FFF",
            opacity: 0.4,
            mr: 2,
            cursor: "pointer",
            "&:hover": {
              opacity: 1,
            },
          }}
        />
        <Box
          onClick={handleClickCard}
          className="dots"
          data-index={1}
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#FFF",
            opacity: 0.4,
            cursor: "pointer",
            "&:hover": {
              opacity: 1,
            },
          }}
        />
      </Box>

      <Box
        className="card activeCard"
        sx={{
          width: 1,
          height: 1,
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          background: `url(${masterCard}) center center / cover no-repeat`,
          borderRadius: "20px",
          transform: "translateX(-100%)",
          opacity: 0,
        }}
      >
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 24px",
          }}
        >
          <Box component="img" src={contactLess} />
          <Box component="img" src={masterCardLogo} />
        </Box>
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0px 24px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.5rem",
              color: "#FFF",
              fontFamily: "IRANSans-DemiBold",
              letterSpacing: 5,
              opacity: 0.9,
            }}
          >
            1102 2385 4492 5823
          </Typography>
        </Box>
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 24px",
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: ".9rem",
                color: "#FFF",
                opacity: 0.8,
                mb: 1,
              }}
            >
              نام صاحب کارت
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontFamily: "IRANSans-DemiBold",
                color: "#FFF",
                opacity: 1,
              }}
            >
              علی صادقی
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: ".9rem",
                color: "#FFF",
                opacity: 0.8,
                mb: 1,
              }}
            >
              تاریخ انقضا
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontFamily: "IRANSans-DemiBold",
                color: "#FFF",
                opacity: 1,
              }}
            >
              28 / 05
            </Typography>
          </Box>
          <Box>
            <Box component="img" src={sim} />
          </Box>
        </Box>
      </Box>
      <Box
        className="card"
        sx={{
          width: 1,
          height: 1,
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          background: `url(${visaCard}) center center / cover no-repeat`,
          borderRadius: "20px",
          transform: "translateX(-100%)",
          opacity: 0,
        }}
      >
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 24px",
          }}
        >
          <Box component="img" src={contactLess} />
          <Box component="img" src={visaCardLogo} />
        </Box>
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0px 24px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.5rem",
              color: "#FFF",
              fontFamily: "IRANSans-DemiBold",
              letterSpacing: 5,
              opacity: 0.9,
            }}
          >
            1102 2385 4492 5823
          </Typography>
        </Box>
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 24px",
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: ".9rem",
                color: "#FFF",
                opacity: 0.8,
                mb: 1,
              }}
            >
              نام صاحب کارت
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontFamily: "IRANSans-DemiBold",
                color: "#FFF",
                opacity: 1,
              }}
            >
              علی صادقی
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: ".9rem",
                color: "#FFF",
                opacity: 0.8,
                mb: 1,
              }}
            >
              تاریخ انقضا
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontFamily: "IRANSans-DemiBold",
                color: "#FFF",
                opacity: 1,
              }}
            >
              28 / 05
            </Typography>
          </Box>
          <Box>
            <Box component="img" src={sim} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
