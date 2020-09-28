<template>
  <main>
    <div class="parallax">
      
    <div
      class="title d-flex flex-column justify-content-center align-items-center align-content-center"
    >
      <p>Bintang Yoga Pamungkas</p>
      <h1>UI/UX Designer at VARX</h1>
    </div>
    <div class="hero parallax__layer--back"></div>
    <div class="container parallax__layer--base">
      <!-- <a href="https://www.https://dribbble.com/bintangyoga" target="_blank">
        <div class="ribbon ribbon-dribbble">
          <div class="ribbon-img">
            <img src="~/assets/images/dribbble.png" />
          </div>
          <div class="teks">Dribbble</div>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/bintangyoga/" target="_blank">
        <div class="ribbon ribbon-linkedin">
          <div class="ribbon-img">
            <img src="~/assets/images/linkedin.png" />
          </div>
          <div class="teks">Linkedin</div>
        </div>
      </a>
      <a href="https://www.medium.com/@pamungkas" target="_blank">
        <div class="ribbon ribbon-medium">
          <div class="ribbon-img">
            <img src="~/assets/images/medium.png" />
          </div>
          <div class="teks">Medium</div>
        </div>
      </a> -->
      <div class="col-md-12">
        <NuxtLink to="/about">
          <div class="image-box">
            <div id="overlay"></div>
            <img src="~/assets/images/portofolio1.jpg" />
          </div>
        </NuxtLink>
      </div>
      <div class="col-md-6 mt-4">
        <NuxtLink to="/about">
          <div class="image-box">
            <div id="overlay"></div>
            <img src="~/assets/images/portofolio2.jpg" />
          </div>
        </NuxtLink>
      </div>
      <div class="col-md-6 mt-4">
        <NuxtLink to="/about">
          <div class="image-box">
            <div id="overlay"></div>
            <img src="~/assets/images/portofolio3.jpg" />
          </div>
        </NuxtLink>
      </div>
      <div class="col-md-12 mt-5">
        <div class="heading text-center mt-5">
          <h3>Tools &amp; Skills</h3>
        </div>
        <div class="tools">
          <img class="tool__item" src="~/assets/images/figma.png" alt="" />
          <img
            class="tool__item"
            src="~/assets/images/svg/illustrator.svg"
            alt=""
          />
          <img
            class="tool__item"
            src="~/assets/images/svg/photoshop.svg"
            alt=""
          />
          <img class="tool__item" src="~/assets/images/svg/xd.svg" alt="" />
          <img class="tool__item" src="~/assets/images/svg/nuxt.svg" alt="" />
          <img class="tool__item" src="~/assets/images/svg/sass.svg" alt="" />
        </div>
      </div>
    </div>
    </div>
    <div class="row mt-5 d-flex flex-column align-items-center">
      <div
        class="col-md-8 d-flex flex-row justify-content-between mt-4 pt-1 bottom-contact"
      >
        <div class="bottom-contact__left m-3 d-flex align-items-center">
          <img class="contact-logo" src="~/assets/images/svg/logo.svg" />
          <p class="contact-text ml-3">
            For business inquiry please text me on WhatsApp
          </p>
        </div>
        <a
          href="http://wa.me/089673768713"
          target="_blank"
          class="btn btn-success m-3"
          >WhatsApp Now</a
        >
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
$breakpoints: (
  "small": (
    max-width: 700px,
  ),
  "medium": (
    max-width: 992px,
  ),
  "large": (
    max-width: 1200px,
  ),
) !default;

/// Mixin to manage responsive breakpoints
/// @author Hugo Giraudel
/// @param {String} $breakpoint - Breakpoint name
/// @require $breakpoints
@mixin respond-to($breakpoint) {
  // If the key exists in the map
  @if map-has-key($breakpoints, $breakpoint) {
    // Prints a media query based on the value
    @media #{inspect(map-get($breakpoints, $breakpoint))} {
      @content;
    }
  }

  // If the key doesn't exist in the map
  @else {
    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "
        + "Available breakpoints are: #{map-keys($breakpoints)}.";
  }
}
.parallax {
  perspective: 2px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.parallax__layer--base {
  transform: translateZ(0);
}
.parallax__layer--back {
  transform: translateZ(-1px);
}

.title {
  margin-top: 30vh;
  margin-bottom: 10vh;
}

.hero {
  background: url("~assets/images/hero-img.png");
  background-repeat: no-repeat;
  width: 100%;
  height: 80vh;
  h1 {
    position: absolute;
  }
}

.tools {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;

  .tool__item {
    width: 80;
    height: 80px;
    margin: 20px;

    // @include respond-to('small') {
    //   background: red;
    // }
  }
}

.logo {
  position: absolute;
  top: 40px;
  left: 40px;
}

.contact-logo {
  width: 40px;
  height: 40px;
}

.contact-text {
  margin: 0;
}

.ribbon {
  z-index: 1;
  width: 42px;
  height: 42px;
  position: absolute;
  border-radius: 50%;
  transition: all 0.2s;
  cursor: pointer;

  .ribbon-img {
    width: 100%;
    height: 100%;
    img {
      width: auto;
      height: 100%;
    }
  }

  .teks {
    color: #fff;
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
  }

  &:hover {
    width: 140px;
    border-radius: 20px;
    border: none;
    img {
      animation-name: spin;
      animation-duration: 800ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .teks {
      position: absolute !important;
      top: 10px !important;
      left: 48px !important;
    }
  }
}

.ribbon-dribbble {
  background-color: #ea4c89;
  top: 100px;
  right: 20px;
}
.ribbon-linkedin {
  background-color: #0077b5;
  top: 160px;
  right: 20px;
}
.ribbon-medium {
  background-color: #292929;
  top: 220px;
  right: 20px;
}

.ribbon:active {
  border-color: #d00;
  border-bottom-color: transparent;
}

.bottom-contact {
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 0px 30px 10px rgba(74, 23, 141, 0.062);

  @include respond-to("small") {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center !important;
    align-items: center !important;
    align-content: center !important;
    .bottom-contact__left {
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      .contact-text {
        margin: 20px 0 0 0 !important;
      }
    }
  }
}
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.image-box {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 100%;
  height: auto;
  max-height: 400px;
  border-radius: 10px;

  &:hover {
    #overlay {
      background: transparent;
      height: 100%;
      transition: 0.5s;
    }
    img {
      transform: scale(1.1);
    }
  }

  #overlay {
    background: rgba(255, 255, 255, 0.062);
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    transition: 0.5s;
  }
  img {
    max-width: 100%;
    transition: all 0.3s;
    display: block;
    width: 100%;
    height: auto;
    transform: scale(1);
  }
}
</style>