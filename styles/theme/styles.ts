export const styles = {
  styles: {
    global: {
      "html, body": {
        height: "100vh",
        overflow: "hidden",
        width: "100vw",
      },
      html: {
        scrollBehavior: "initial",
      },
      body: {
        bg: "#000",
      },
      ".main-canvas": {
        position: 'fixed !important',
        left: 0,
        top: 0,
        height: "full",
        width: "full",
        transition: '0.3s opacity',
        '&.hide': {
          opacity: 0
        }
      },
    },
  },
  fonts: {
    body: "Audiowide, cursive",
    heading: "Audiowide, cursive",
    mono: "Audiowide, cursive",
  },
  fontSizes: {
    xs: "0.75rem", // 12 px
    sm: "0.875rem", // 14 px
    md: "1rem", // 16 px
    lg: "1.25rem", // 20 px
    xl: "1.5rem", // 24 px
    "2xl": "2rem", // 32 px
    "3xl": "3.125rem", // 40 px
    "4xl": "3.875rem", // 62 px
  },
  sizes: {
    container: {},
  },
  space: {},
};
