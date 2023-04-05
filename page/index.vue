<template>
  <div class="container">
    <section class="body-s">
      <svg>
        <g>
          <line id="line" x1="0" x2="100%" />
          <polyline id="wave" />
        </g>
      </svg>
    </section>
  </div>
</template>
<style scoped lang="scss">
.body-s {
  height: 100vh;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

svg {
  width: 800px;
  height: 100%;
  padding: 30px;
}

line {
  stroke-width: 1;
  stroke: #3c3c3c;
}

#wave {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #56acf4;
}
</style>

<script>
export default {
  mounted() {
    this.$gsap.set("g", { y: window.innerHeight / 2 });

    const svg = this.$el.querySelector("svg");
    const wave = this.$el.querySelector("#wave");
    const width = 800;

    const amplitude = 200;
    const frequency = 2;
    const segments = 200;
    const interval = width / segments;

    for (let i = 0; i < segments; i++) {
      const norm = i / (segments - 1);
      const point = wave.points.appendItem(svg.createSVGPoint());

      point.x = i * interval;
      point.y = amplitude / 2;
      // point.y = Math.abs(Math.sin(point.x / 50)) * amplitude;

      this.$gsap
        .to(point, 2, {
          y: -point.y,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
        .progress(norm * frequency);
    }
  },
};
</script>
