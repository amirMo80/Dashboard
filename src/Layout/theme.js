import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "IRANSans-Regular",
    },
    palette: {
        primary: {
            main: "#6366F1"
        },
        text: {
            main: "#111927"
        }
    },
    components: {
        MuiTabs: {
            styleOverrides: {
                scroller: {
                    width: "85%",
                },
                flexContainer: {
                    width: "100%",
                }
            }
        }
    }

})