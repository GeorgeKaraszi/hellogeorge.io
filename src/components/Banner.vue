<template>
  <section class="header-container">
    <header id="header">
      <div class="intro">
        <div class="container">
          <div class="row">
            <div class="intro-text">
              <h1>Hello, I'm
                <span class="name">George</span>!
              </h1>
              <p>Full Stack Developer</p>
            </div>
            <nav id="menu" class="nav">
              <ul>
                <li>
                  <a href="#" v-on:click="scrollToFooter()" class="social-intro;">
                    <span class="icon">
                      <i aria-hidden="true" class="far fa-comments">
                        <span class="label">Social</span>
                      </i>
                      <span aria-hidden="true" class="icon-message">
                        Social
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/static/resume" class="social-intro;">
                    <span class="icon">
                      <i aria-hidden="true" class="far fa-user">
                        <span class="label">Resume</span>
                      </i>
                      <span aria-hidden="true" class="icon-message">
                        Resume
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:george@hellogeorge.io" class="social-intro;">
                    <span class="icon">
                      <i aria-hidden="true" class="far fa-envelope-open">
                        <span class="label">Email Me</span>
                      </i>
                      <span aria-hidden="true" class="icon-message">
                        Email Me
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </section>
  <!-- showcase-process -->
</template>

<script>
export default {
  methods: {
    scrollToFooter() {
      const target = document.getElementById('footer');
      this.$SmoothScroll(target, 3000);
    },
  },
};
</script>

<style lang="less" scope>
#header {
  z-index: 1;
  position: relative;

  background-image: url(../assets/images/header.jpg);
  background-repeat: no-repeat;
  background-position: 40% 90%;
  background-size: cover;
  background-color: #7bc3d1;
}

.intro {
  display: table;
  width: 100%;
  height: auto;
  padding: 100px 0;
  color: #fff;
}

.intro h1 {
  text-transform: none;
}

.row {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: 8em;
}

  .intro .name {
    font-weight: 600;
  }

/* Media Queries */

@media (min-width: 768px) {
  .intro {
    height: 100%;
    padding: 0;
    text-align: left;
    color: #fff;
  }
  .intro H1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1px;
  }

  .intro .intro-text p {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
  }
  .row {
    min-height: 550px;
    padding-top: 300px;
    padding-bottom: 200px;
  }
}

@media (max-width: 48em) {
  #header {
    background-position: 25% 90%;
  }
  .intro {
    text-align: left;
  }

  .intro-text,
  .intro .name {
    max-width: 100%;
    padding: 0px;
    margin: 0px;
  }
}

@media (max-width: 450px) {
  #header {
    background-position: center left;
  }
}
</style>
