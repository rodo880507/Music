<template>
  <div class="about">
    <h1>This is an about page</h1>
    <base-button />
    <div class="scrollPosition">{{ offset }}</div>
  </div>
</template>

<script>
import mixin from '@/includes/mixin';

export default {
  name: 'About',
  mixins: [mixin],
  data() {
    return {
      offset: 0,
    };
  },
};
</script>

<style>
.about {
  width: 100%;
  height: 3000px;
}
</style>
