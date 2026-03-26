import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: '"Chakra Petch", "Segoe UI", sans-serif',
    body: '"Sora", "Segoe UI", sans-serif',
  },
  colors: {
    brand: {
      50: "#ffeceb",
      100: "#ffd0cd",
      200: "#ffb3ae",
      300: "#ff8d86",
      400: "#ff645d",
      500: "#ff3b30",
      600: "#e42f24",
      700: "#bf231b",
      800: "#861611",
      900: "#4d0906",
      950: "#0f0c0d",
    },
    neutral: {
      900: "#181415",
      950: "#0b090a",
    },
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
        bg: "brand.950",
      },
      body: {
        bg: "brand.950",
        color: "white",
        overflowX: "hidden",
      },
      "::selection": {
        background: "#ff645d",
        color: "#120d0d",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
        fontWeight: "700",
        letterSpacing: "-0.01em",
        transition: "all 0.2s ease",
      },
      variants: {
        accent: {
          bg: "brand.500",
          color: "white",
          boxShadow: "0 18px 40px rgba(255, 59, 48, 0.2)",
          _hover: {
            bg: "brand.400",
            transform: "translateY(-2px)",
            boxShadow: "0 22px 48px rgba(255, 100, 93, 0.22)",
          },
          _active: {
            transform: "translateY(0)",
          },
        },
        outlineGlass: {
          border: "1px solid",
          borderColor: "whiteAlpha.300",
          bg: "rgba(255, 255, 255, 0.08)",
          color: "white",
          _hover: {
            bg: "rgba(255, 255, 255, 0.12)",
            borderColor: "brand.300",
            transform: "translateY(-2px)",
          },
          _active: {
            transform: "translateY(0)",
          },
        },
        subtleGhost: {
          bg: "rgba(255, 255, 255, 0.08)",
          color: "white",
          _hover: {
            bg: "rgba(255, 255, 255, 0.12)",
          },
        },
      },
    },
  },
});

export default theme;
