<script setup lang="ts">
import type { Product } from '~/types/product'
import FavoriteIcon from '../assets/icons/favorite.svg'

const props = defineProps<{
  product: Product
}>()

const isFav = ref(false)

const toggleFav = () => {
  isFav.value = !isFav.value
}

const halfPrice = computed(() => {
  const value = Number(props.product.price ?? 0)
  return Math.ceil(value / 2)
})
</script>

<template>
  <article class="product-card">
    <a class="product-card__link" href="#" aria-label="Open product" />

    <button
      class="product-card__fav"
      :class="{ 'product-card__fav--active': isFav }"
      type="button"
      aria-label="Add to favorites"
      @click.stop.prevent="toggleFav"
    >
      <FavoriteIcon class="product-card__fav-icon" />
    </button>

    <div class="product-card__media">
      <img
        v-if="product.image"
        class="product-card__img"
        :src="product.image"
        :alt="product.name"
      />

      <div v-else class="product-card__img product-card__img--stub">No image</div>
    </div>

    <div class="product-card__body">
      <div class="product-card__prices">
        <div class="product-card__price">{{ product.price }} ₽</div>
        <div class="product-card__price product-card__price--x2">{{ halfPrice }} ₽ ⨯ 2</div>
      </div>

      <h3 class="product-card__name">
        <a class="product-card__name-link" href="#">{{ product.name }}</a>
      </h3>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '../assets/scss/tokens' as t;
@use '../assets/scss/mixins' as m;

.product-card {
  position: relative;
  display: flex;
  flex-direction: column;

  &__link {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  &__fav {
    position: absolute;
    top: 11px;
    right: 10px;
    z-index: 2;
    outline: none;
    background: none;
    border: none;
    color: rgba(0, 0, 0, 1);
  }

  &__media {
    width: 100%;
    aspect-ratio: 290 / 180;
    overflow: hidden;
    border-radius: 0;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    &--stub {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 0, 0, 1);
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__name {
    margin: 0;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
  }

  &__name-link {
    position: relative;
    z-index: 2;
  }

  &__prices {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;

    @include m.mq-down(md) {
      flex-direction: column;
      gap: 9px;
    }
  }

  &__price {
    color: rgba(0, 0, 0, 1);
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;

    &--x2 {
      font-weight: 500;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: -5%;
      padding: 4px;
      color: rgba(255, 255, 255, 1);
      background-color: rgba(0, 0, 0, 1);
    }
  }
}
</style>
