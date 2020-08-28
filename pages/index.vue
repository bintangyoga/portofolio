<template>
  <main>
    <div class="container mt-5">
      <div class="row mb-5">
      <img class="logo" src="~/assets/images/image.jpg">
      <div class="darkmode">
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="darkSwitch">
          <label class="custom-control-label" for="darkSwitch">Dark Mode</label>
        </div>
        <!-- <script src="dark-mode-switch.min.js"></script> -->
      </div>
      <a href="https://www.https://dribbble.com/bintangyoga" target="_blank">
        <div class="ribbon ribbon-dribbble">
          <div class="ribbon-img">
            <img src="~/assets/images/dribbble.png">
          </div>
          <div class="teks">Dribbble</div>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/bintangyoga/" target="_blank">
        <div class="ribbon ribbon-linkedin">
          <div class="ribbon-img">
            <img src="~/assets/images/linkedin.png">
          </div>
          <div class="teks">Linkedin</div>
        </div>
      </a>
      <a href="https://www.medium.com/@pamungkas" target="_blank">
        <div class="ribbon ribbon-medium">
          <div class="ribbon-img">
            <img src="~/assets/images/medium.png">
          </div>
          <div class="teks">Medium</div>
        </div>
      </a>

        <div class="col-md-12 text-center px-5 mt-5">
            <img src="~/assets/images/image.jpg" class="profile img-fluid rounded-circle mt-5" alt="Responsive image" />
            <h1 class="mt-3">Bintang Yoga Pamungkas</h1>
            <p>UI/UX Designer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus beatae expedita obcaecati optio nihil ratione consectetur ipsam impedit iure asperiores. Labore esse corporis quas aliquid voluptatibus porro quo nam impedit.</p>
            <div class="d-flex flex-column align-items-center">
              <a href="#" class="btn btn-primary">Email Me</a>
              <a href="#" class="mt-3">Download CV</a>
            </div>
        </div>
        <div class="col-md-12 mt-5">
          <NuxtLink to="/about">
            <div class="image-box">
              <div id="overlay"></div>
              <img src="~/assets/images/portofolio1.jpg">
            </div>
          </NuxtLink>
        </div>
        <div class="col-md-6 mt-4">
          <NuxtLink to="/about">
            <div class="image-box">
              <div id="overlay"></div>
              <img src="~/assets/images/portofolio2.jpg">
            </div>
          </NuxtLink>
        </div>
        <div class="col-md-6 mt-4">
          <NuxtLink to="/about">
            <div class="image-box">
              <div id="overlay"></div>
              <img src="~/assets/images/portofolio3.jpg">
            </div>
          </NuxtLink>
        </div>
        <div class="col-md-12 mt-5">
          <div class="heading text-center mt-5">
            <h3>Tools & Skills</h3>
          </div>
          <div class="tools">
            <div class="tool-list"></div>
            <div class="tool-list"></div>
            <div class="tool-list"></div>
            <div class="tool-list"></div>
            <div class="tool-list"></div>
            <div class="tool-list"></div>
          </div>
        </div>
      </div>
      <div class="row mt-5 d-flex flex-column align-items-center">
        <div class="col-md-8 d-flex flex-row justify-content-between mt-4 pt-1 bottom-contact">
          <div class="bottom-contact__left d-flex m-3">
            <img class=" logo" src="~/assets/images/image.jpg">
            <p class="ml-3">Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <a href="#" class="btn btn-success m-3">WhatsApp Now</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  $breakpoints: (
  'small':  ( min-width:  700px ),
  'medium': ( min-width:  992px ),
  'large':  ( min-width: 1200px )
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





  .tools{
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;

    .tool-list{
      background: red;
      width: 100px;
      height: 100px;
      margin: 20px;
      border-radius: 36px;
      
      @include respond-to('small') {
      background: red;
  }
    }
  }

  .logo{
    position: absolute;
    top: 40px;
    left: 40px;
  }

  .darkmode{
    position: absolute;
    top: 40px;
    right: 20px;
  }

  .ribbon {
    z-index: 1;
    width: 42px;
    height: 42px;
    position: absolute;
    border-radius: 50%;
    transition: all 0.2s;
    cursor: pointer;
    
    .ribbon-img{
      width: 100%;
      height: 100%;
      img{
        width: auto;
        height: 100%;
      }
    }
    
    .teks{
      color: #fff;
      position: absolute !important;
      top: -9999px !important;
      left: -9999px !important;
    }

    &:hover {
      width: 140px;
      border-radius: 20px;
      border: none;
      img{
        animation-name: spin;
        animation-duration: 800ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear; 
      }
      @keyframes spin {
          from {
              transform:rotate(0deg);
          }
          to {
              transform:rotate(360deg);
          }
      }

      .teks{
        position: absolute !important;
        top: 10px !important;
        left: 48px !important;
      }
    }
  }

  .ribbon-dribbble{
    background-color: #EA4C89;
    top: 100px;
    right: 20px;
  }
  .ribbon-linkedin{
    background-color: #0077B5;
    top: 160px;
    right: 20px;
  }
  .ribbon-medium{
    background-color: #292929;
    top: 220px;
    right: 20px;
  }



  .ribbon:active {
    border-color: #d00;
    border-bottom-color: transparent;
  }


  .bottom-contact{
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 0px 30px 10px rgba(74, 23, 141, 0.062);
  }
  .profile{
    width: 200px;
    height: 200px;
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

    &:hover{
      #overlay {
        background: transparent;
        height: 100%;
        transition: 0.5s;
      }
      img{
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
    img{
      max-width: 100%;
      transition: all 0.3s;
      display: block;
      width: 100%;
      height: auto;
      transform: scale(1);
    }
}
</style>