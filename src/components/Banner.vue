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
                <li v-for="contact in contacts" :key="contact.link">
                  <a :href="contact.action ? null : [contact.link]"  v-on:click="scrollToFooter(contact)" class="social-intro;">
                    <span class="icon">
                      <i aria-hidden="true" :class="[contact.icon]">
                        <span class="label">{{contact.label}}</span>
                      </i>
                      <span aria-hidden="true" class="icon-message">
                        {{contact.label}}
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
    scrollToFooter(element) {
      if (element.action != null) {
        const target = document.getElementById(element.action);
        this.$SmoothScroll(target, 1000);
      }
    },
  },
  data() {
    return {
      contacts: [
        {
          icon: 'far fa-comments',
          label: 'Social',
          action: 'footer',
        },
        {
          link: '#',
          icon: 'far fa-user',
          label: 'Resume',
        },
        {
          link: 'mailto:george@georgey.io',
          icon: 'far fa-envelope-open',
          label: 'Email Me',
        },
      ],
    };
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
  .intro .intro-text {
    max-width: 75%;
  }
  .intro .intro-text p {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    // margin-bottom: 40px;
    // margin-top: 20px;
  }
  .row {
    min-height: 550px;
    padding-top: 300px;
    padding-bottom: 200px;
  }
}
</style>
