<template>
  <section id="showcase-process" class="content-box off-white">
    <header class="major">
      <h2>What defines me as a successful developer</h2>
      <p>A repeatable process for my development standards...</p>
    </header>
    <div class="container">
      <div class="process">
        <section class="box" v-for="process in processes" :key="process.title">
          <i class="icon big rounded" v-bind:class="[process.color, process.icon]"></i>
          <h3>{{ process.title }}</h3>
          <p>{{ process.description }}</p>
        </section>
      </div>
    </div>
  </section>
  <!-- showcase-process -->
</template>

<script>
export default {
  data() {
    return {
      processes: [
        {
          title: 'Feature Planning',
          description:
            'Designing a roadmap for each part of system. Establishing feature priorities.',
          color: 'light-blue',
          icon: 'fa fa-map-signs',
        },
        {
          title: 'Development',
          description:
            'Implementing features as outline and discussed with the team.',
          color: 'light-green',
          icon: 'fa fa-desktop',
        },
        {
          title: 'Test Driven',
          description:
            'Designing test specifications to ensure the integrity of the application.',
          color: 'dark-blue',
          icon: 'fa fa-cogs',
        },
        {
          title: 'Kick Off',
          description:
            'Releasing the product as each milestone is reached successfully.',
          color: 'light-red',
          icon: 'fa fa-rocket',
        },
      ],
    };
  },
};
</script>

