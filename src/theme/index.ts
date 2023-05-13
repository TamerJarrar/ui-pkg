import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

//NextJs
// import { Nunito_Sans } from '@next/font/google'
// const nunito = Nunito_Sans({ weight: ['200', '300', '400', '600', '700', '800', '900'], subsets: ['latin'] });

export const colors = {
  primary: {
    1: "#d04e03",
    2: "#df5900",
    3: "#ee6700",
    4: "#fb8111",
    5: "#f78e2c",
    6: "#f39b49",
    7: "#f9aa62",
    8: "#fdbd75",
    9: "#f9d2a4",
    10: "#fce1c2",
    11: "#feecd8",
    12: "#fff5ea",
  },
  secondary: {
    1: "#002f61",
    2: "#004084",
    3: "#0053ab",
    4: "#005fc3",
    5: "#0c70db",
    6: "#1f84ef",
    7: "#4ca1fb",
    8: "#72b6ff",
    9: "#90c6ff",
    10: "#b9dbff",
    11: "#d6eaff",
    12: "#eaf4ff",
  },
  tertiary: {
    1: "#005415",
    2: "#00661a",
    3: "#047020",
    4: "#07932c",
    5: "#0aad36",
    6: "#0fc943",
    7: "#22e54b",
    8: "#55f570",
    9: "#95ffa6",
    10: "#bfffca",
    11: "#e3ffe8",
    12: "#f1fff4",
  },
  gray: {
    1: "#0f0d15",
    2: "#1d1929",
    3: "#2A243A",
    4: "#3c3553",
    5: "#5b536f",
    6: "#7f779e",
    7: "#968eb0",
    8: "#b7accb",
    9: "#d1cde2",
    10: "#dcdae0",
    11: "#ededf1",
    12: "#f9f9f9",
  },
};

export const gradients = {
  2: "linear-gradient(155.01deg, #201B2D 13.88%, rgba(41, 36, 63, 0.3) 84.1%)",
  5: "linear-gradient(180deg, #1D1929 0%, #2D2740 100%)",
  14: "linear-gradient(90deg, #2A243B 0%, #362E4A 105.73%)",
  16: "linear-gradient(180deg, rgba(30, 133, 241, 0.2) 0%, rgba(0, 0, 0, 0) 55.37%), #1D1929",
};

export const shadows = {
  0: "0px 8px 12px rgba(0, 0, 0, 0.08), 0px 4px 48px rgba(0, 0, 0, 0.08)",
};
export const theme = createTheme({
  // direction: "rtl",
  color: colors,
  gradients: gradients,
  typography: {
    fontFamily: '"Nunito Sans", sans-serif', // React fonts
    fontSize: 16,
    fontWeightRegular: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightBold: 900,
    h1: { fontSize: "60px", lineHeight: "72px" },
    h2: { fontSize: "48px", lineHeight: "56px" },
    h3: { fontSize: "34px", lineHeight: "40px" },
    h4: { fontSize: "24px", lineHeight: "32px" },
    h5: { fontSize: "18px", lineHeight: "32px" },
    caption: {
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "16px",
      color: colors.gray[9],
    },
  },
  status: {
    danger: orange[500],
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          "& .MuiPaper-root.MuiDrawer-paper": {
            borderRadius: "0 8px 8px 0",
            border: "none",
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "64px",
          "@media (min-width: 600px)": {
            minHeight: "64px",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#0F0D15", // gray1
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#2A243A", // gray3
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          p: "0!important",
          "&.MuiButton-root": {
            lineHeight: "1rem",
          },
          "&.MuiButton-outlinedWhite": {
            border: `1px solid ${colors.gray[11]}`,
          },
          "&.MuiButton-outlinedGray": {
            border: `1px solid ${colors.gray[4]}`,
            color: colors.gray[7],
          },
          ".MuiButtonBase-root-MuiTab-root": {
            padding: "0!important",
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          background: "transparent",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Nunito Sans", sans-serif',
          fontStyle: "normal",
          color: colors.gray[9],
        },
      },
      variants: [
        {
          props: { variant: "title1" },
          style: {
            fontWeight: 700,
            fontSize: "60px",
            lineHeight: "120%",
            letterSpacing: "-0.005em",
          },
        },
        {
          props: { variant: "title2" },
          style: {
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "116%",
          },
        },
        {
          props: { variant: "title3" },
          style: {
            fontWeight: 800,
            fontSize: "34px",
            lineHeight: "117%",
          },
        },
        {
          props: { variant: "headline" },
          style: {
            fontWeight: 800,
            fontSize: "24px",
            lineHeight: "132%",
            letterSpacing: "0.01em",
            fontFeatureSettings: "'liga' off",
          },
        },
        {
          props: { variant: "subHeadline" },
          style: {
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "135%",
            letterSpacing: "0.01em",
          },
        },
        {
          props: { variant: "body" },
          style: {
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "147%",
          },
        },
        {
          props: { variant: "bodyBold" },
          style: {
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "147%",
          },
        },

        {
          props: { variant: "bodySmall" },
          style: {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "116%",
          },
        },
        {
          props: { variant: "bodyMedium" },
          style: {
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "112%",
            letterSpacing: "4%",
          },
        },
        {
          props: { variant: "bodyLarge" },
          style: {
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "23px",
            letterSpacing: "4%",
          },
        },
        {
          props: { variant: "buttonLarge" },
          style: {
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "0.03em",
          },
        },
        {
          props: { variant: "buttonMedium" },
          style: {
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "112%",
            letterSpacing: "0.02em",
          },
        },
        {
          props: { variant: "buttonLarge" },
          style: {
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "130%",
            letterSpacing: "0.04em",
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "none",
          fontFamily: '"Nunito Sans", sans-serif',
          textTransform: "initial",
          fontWeight: 700,
          padding: "16px 16px",
          "&.MuiButton-text": {
            backgroundColor: "transparent",
          },
        },
        sizeSmall: {
          fontSize: "12px",
          lineHeight: "16px",
          padding: "8px 16px",
          letterSpacing: "0.04rem",
          height: "32px",
        },
        sizeMedium: {
          fontSize: "14px",
          fontWeight: 600,
          height: "48px",
        },
        sizeLarge: {
          fontSize: "25px",
        },
      },
      variants: [
        {
          props: { variant: "contained" },

          style: {
            textTransform: "none",
            background: colors.secondary[6],
            border: `1px solid ${colors.secondary[5]}`,
            height: 45,
            borderRadius: "6px",
            boxShadow: "inset 0px -3px 0px #1A528D",
            "&:hover": {
              background: colors.secondary[5],
            },
            "&:disabled": {
              background: "#234870",
            },
          },
        },
      ],
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          top: "8px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          WebkitBoxShadow: "unset !important",
          ".Mui-disabled": {
            // background: "#f00"
          },
        },

        input: {
          // ".MuiFilledInput-root:hover ": {
          //   backgroundColor: "red!important"
          // },

          WebkitBoxShadow: "unset !important",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent !important",
        },
      },
    },
    // MuiTextField: {
    //     styleOverrides: {
    //         root: {
    //             // backgroundColor: '#1D1929'
    //         }
    //     }
    // },

    MuiSelect: {
      styleOverrides: {
        outlined: {
          display: "flex",
          alignItems: "center",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          background: colors.gray[1] + " !important",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: "0.8rem 0.6rem",
          "&.Mui-selected": {
            background: colors.gray[2] + " !important",
          },
        },
      },
    },
  },

  palette: {
    mode: "dark",
    // orange
    primary: {
      main: colors.primary[4],
      light: "#F78E2C",
      dark: colors.primary[3],
      contrastText: "#fff",
    },
    // blue
    secondary: {
      main: colors.secondary[5], // Buttons main color
      light: colors.secondary[8],
      dark: colors.secondary[4],
    },
    // green
    // tertiary: {
    //   main: "#0f0", // Buttons main color
    //   light: "#0fa",
    //   dark: "#0f6",
    // },
  },
});

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    title3: true;
    headline: true;
    subHeadline: true;
    body: true;
    bodyBold: true;
    bodySmall: true;
    bodyMedium: true;
    bodyLarge: true;
    buttonLarge: true;
    buttonMedium: true;
    buttonSmall: true;
  }
}

declare module "@mui/material/styles/createPalette" {}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    white: true;
    gray: true;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
    color: {
      gray: {};
      primary: {};
      secondary: {};
      tertiary: {};
    };
    gradients: {};
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    color: {
      gray: {};
      primary: {};
      secondary: {};
      tertiary: {};
    };
    gradients: {};
  }
}
