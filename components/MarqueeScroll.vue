<template>
    <div class="marquee-container">
      <div class="marquee">
        <div
          class="marquee-content"
          :style="{ width: `calc(${imageWidth} * ${images.length})`, transform: `translateX(${translateValue}px)` }"
        >
          <div
            v-for="(image, index) in images"
            :key="index"
            class="marquee-item"
            :style="{ width: `${imageWidth}`, margin: `0 ${imageMargin}` }"
          >
            <img :src="image.src" :alt="image.alt" class="marquee-image" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true
      },
      imageWidth: {
        type: String,
        default: "100px" // Adjust as per your requirement
      },
      imageMargin: {
        type: String,
        default: "10px" // Adjust as per your requirement
      },
      scrollSpeed: {
        type: Number,
        default: 0.5 // Adjust as per your requirement
      }
    },
    data() {
      return {
        translateValue: 0,
        containerWidth: 0,
        animationId: null
      };
    },
    methods: {
      startAnimation() {
        this.animationId = requestAnimationFrame(this.moveImages);
      },
      moveImages() {
        this.translateValue -= this.scrollSpeed;
        if (Math.abs(this.translateValue) >= this.containerWidth) {
          this.translateValue = 0;
        }
        this.animationId = requestAnimationFrame(this.moveImages);
      },
      stopAnimation() {
        cancelAnimationFrame(this.animationId);
      }
    },
    mounted() {
      this.containerWidth = this.$refs.marquee.clientWidth;
      this.startAnimation();
    },
    beforeDestroy() {
      this.stopAnimation();
    }
  };
  </script>
  
  <style scoped>
  .marquee-container {
    overflow: hidden;
  }
  
  .marquee {
    white-space: nowrap;
    overflow: hidden;
  }
  
  .marquee-content {
    display: flex;
  }
  
  .marquee-item {
    display: inline-block;
  }
  
  .marquee-image {
    max-width: 100%;
  }
  </style>
  