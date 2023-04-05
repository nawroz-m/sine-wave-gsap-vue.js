import axios from "axios";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/gsap.js", mode: "client", ssr: false }],

  gsap: {
    extraEases: {
      expoScaleEase: true,
    },
  },
};
