<script setup lang="ts">
import AppCursor from '../components/AppCursor.vue'
</script>

<template>
  <div class="app">
    <AppCursor />

    <AppHeader class="app__header" />

    <main class="app__main">
      <slot />
    </main>

    <AppFooter class="app__footer" />
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/tokens' as t;
@use '../assets/scss/mixins' as m;

.app {
  display: flex;
  flex-direction: column;
  gap: 100px;

  @include m.mq-down(sm) {
    gap: 40px;
  }

  &__header {
    padding: 20px 60px;

    @include m.mq-down(sm) {
      padding: 16px 20px;
    }
  }

  &__main {
    padding-inline: 60px;

    @include m.mq-down(sm) {
      padding-inline: 20px;
    }
  }

  &__footer {
    background-color: rgba(0, 0, 0, 1);
    display: flex;
    padding: 100px 60px;
    gap: 20px;
    justify-content: space-around;
    align-items: center;

    @include m.mq-down(sm) {
      padding: 60px 20px;
      flex-direction: column;
      gap: 60px;
      align-items: start;
    }
  }
}
</style>
