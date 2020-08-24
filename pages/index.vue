<template>
  <main>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12 text-center px-5 mt-5">
          <div>
            <img src="~/assets/images/image.jpg" class="profile img-fluid rounded-circle" alt="Responsive image" />
            <h5 class="mt-3">Bintang Yoga Pamungkas</h5>
            <p>UI/UX Designer</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus beatae expedita obcaecati optio nihil ratione consectetur ipsam impedit iure asperiores. Labore esse corporis quas aliquid voluptatibus porro quo nam impedit.</p>
          </div>
          <div>
            <a href="#" class="btn btn-primary">Email Me</a>
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 card mt-5">
          <NuxtLink to="/about">
            <img src="~/assets/images/image.jpg" class="img-fluid" alt="Responsive image" />
          </NuxtLink>
        </div>
        <div class="col-md-6 card">
          <img src="~/assets/images/image.jpg" class="img-fluid" alt="Responsive image" />
        </div>
        <div class="col-md-6 card">
          <img src="~/assets/images/image.jpg" class="img-fluid" alt="Responsive image" />
        </div>
      </div>
      <div class="row mt-5 flex justify-align-center">
        <div class="col-md-8 flex flex-row justify-align-center">
          <img src="~/assets/images/image.jpg" class="logo">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <a href="#" class="btn btn-primary">Email Me</a>
        </div>
      </div>
    </div>
  </main>
</template>