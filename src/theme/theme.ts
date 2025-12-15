import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2e7d32", // green (grocery-friendly)
    },

    secondary: {
      main: "#ff9800",
    },

    background: {
      default: "#f9fafb",
      paper: "#ffffff",
    },
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none", // 👈 professional (no ALL CAPS)
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#2e7d32",
        },
      },
    },
  },
});

export default theme;
