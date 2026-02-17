<template>
  <section class="home">
    <h1 class="home__title">тестовое задание</h1>

    <NuxtLink class="btn btn--primary" to="/catalog">В каталог</NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/tokens' as t;
@use '../assets/scss/mixins' as m;

.home {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0 auto;
  min-height: 70vh;
  gap: 40px;

  &__title {
    font-weight: 500;
    font-size: 64px;
    line-height: 110%;
    letter-spacing: 0%;
    text-transform: uppercase;

    @include m.mq-down(xs) {
      font-size: 26px;
    }
  }
}
</style>
