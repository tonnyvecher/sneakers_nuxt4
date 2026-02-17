<script setup lang="ts">
import BurgerIcon from '../assets/icons/menu.svg'
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <a href="#" class="header__logo" />

      <nav class="header__nav">
        <a class="header__link" href="#">Мужчинам</a>
        <a class="header__link" href="#">Женщинам</a>
        <a class="header__link" href="#">Каталог</a>
        <a class="header__link" href="#">Доставка</a>
        <a class="header__link" href="#">Блог</a>
        <a class="header__link" href="#">О нас</a>
      </nav>

      <button class="header__burger" type="button" aria-label="Menu">
        <BurgerIcon class="header__burger--icon" />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/tokens' as t;
@use '../assets/scss/mixins' as m;

.header {
  &__inner {
    max-width: var(--container);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  &__logo {
    width: 42px;
    height: 42px;
    background-color: rgba(255, 0, 0, 1);
    display: block;
    flex: 0 0 auto;

    @include m.mq-down(sm) {
      width: 28px;
      height: 28px;
    }
  }

  &__nav {
    display: inline-flex;
    gap: 40px;
    padding: 10px 24px;
    background-color: rgba(245, 245, 245, 1);
    flex-wrap: wrap;
    flex: 0 0 auto;
    max-width: 100%;
    margin: 0 auto;

    @include m.mq-down(sm) {
      display: none;
    }
  }

  &__link {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
    color: rgba(0, 0, 0, 1);
  }

  &__burger {
    display: none;
    border: none;
    outline: none;

    @include m.mq-down(sm) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: rgba(245, 245, 245, 1);
      transition: background-color 0.3s;

      &:hover {
        background-color: rgb(215, 215, 215);
      }
    }

    &--icon {
      color: rgba(0, 0, 0, 1);
    }
  }
}
</style>
