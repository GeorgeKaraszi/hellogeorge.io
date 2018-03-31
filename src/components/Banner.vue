<template>
  <section class="header-container">
    <header id="header">
      <div class="intro">
        <div class="container">
          <div class="row">
            <div class="intro-text">
              <h1>Hello, I'm
                <span class="name">George Protacio-Karaszi</span>!
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
                  <router-link to="/resume" class="social-intro;">
                    <span class="icon">
                      <i aria-hidden="true" class="far fa-user">
                        <span class="label">Resume</span>
                      </i>
                      <span aria-hidden="true" class="icon-message">
                        Resume
                      </span>
                    </span>
                  </router-link>
                </li>
                <li>
                  <a href="mailto:george@georgey.io" class="social-intro;">
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
}

.intro {
  display: table;
  width: 100%;
  height: auto;
  padding: 100px 0;
  text-align: center;
  color: #fff;
  background: url(../assets/images/placeholder.png) no-repeat center top;
  background-color: #7bc3d1;
  background-size: cover;
  cursor: pointer;
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
  .intro .name {
    font-weight: 600;
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

@media (max-width: 768px) {
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
</style>
