<template>
  <div class="footer-container">
    <div class="footer-wrapper">
      <!-- <section class="foot-header">
        <h3>Get In contact with me</h3>
      </section> -->
      <section id="footer">
        <ul class="icons">
          <li v-for="contact in contacts" :key="contact.link">
            <a v-bind:href="[contact.link]" class="icon" v-bind:class="[contact.icon]">
              <span class="label">{{contact.label}}</span>
            </a>
          </li>
        </ul>
        <div class="copyright">
          George Protacio-Karaszi &copy; 2017
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          link: 'https://www.linkedin.com/in/georgekaraszi',
          icon: 'fa fa-linkedin',
          label: 'Linkedin',
        },
        {
          link: 'https://github.com/GeorgeKaraszi',
          icon: 'fa fa-github',
          label: 'Github',
        },
        {
          link: 'https://www.facebook.com/george.karaszi',
          icon: 'fa fa-facebook',
          label: 'Facebook',
        },
        {
          link: 'mailto:george@georgey.io',
          icon: 'fa fa-envelope-o',
          label: 'Email',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.icon {
    text-decoration: none;
}

.icon:before {
    display: inline-block;
    font-size: 1.25em;
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon>.label {
    display: none;
}

ul.default {
    list-style: disc;
    padding-left: 1em;
}

ul.default li {
    padding-left: 1.5em;
    margin-top: 1.5em;
}

ul.default li:first-child {
    margin-top: 0;
}

ul.icons {
    cursor: default;
}

ul.icons li {
    display: inline-block;
}

ul.icons a {
    display: inline-block;
    width: 2.5em;
    height: 2.5em;
    line-height: 2.5em;
    text-align: center;
    border: 0;
}
</style>
