import { gsap } from "gsap/all";
export default {
  mounted() {
    gsap.registerPlugin(MorphSVGPlugin);
  },
};
