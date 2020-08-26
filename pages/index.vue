<template>
  <main>
          <nav class="nav justify-content-center float-right">
            <div class="nav-link">
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="darkSwitch">
                <label class="custom-control-label" for="darkSwitch">Dark Mode</label>
              </div>
              <script src="dark-mode-switch.min.js"></script>
            </div>
          </nav>
    <div class="container mt-5">
      <div class="row mb-5">
        <div class="col-md-12 text-center px-5 mt-5">
            <img src="~/assets/images/image.jpg" class="profile img-fluid rounded-circle" alt="Responsive image" />
            <h5 class="mt-3">Bintang Yoga Pamungkas</h5>
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
              <img src="~/assets/images/image.jpg">
            </div>
          </NuxtLink>
        </div>
        <div class="col-md-6 mt-4">
          <NuxtLink to="/about">
            <div class="image-box">
              <img src="~/assets/images/image.jpg">
            </div>
          </NuxtLink>
        </div>
        <div class="col-md-6 mt-4">
          <NuxtLink to="/about">
            <div class="image-box">
              <img src="~/assets/images/image.jpg">
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="row mt-5 d-flex flex-column align-items-center">
        <div class="col-md-8 d-flex flex-column align-items-center">
          <img src="~/assets/images/image.jpg" class="logo">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <a href="#" class="btn btn-primary">Email Me</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
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
    img{
      max-width: 100%;
      transition: all 0.3s;
      display: block;
      width: 100%;
      height: auto;
      transform: scale(1);
    }
    &:hover{
      img{
        transform: scale(1.1);
      }
    }
}
</style>