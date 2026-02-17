<script setup lang="ts">
const catalog = useCatalogProducts()

await useAsyncData('catalog:init', () => catalog.initSSR(), { server: true })
</script>

<template>
  <section class="catalog">
    <h1 class="catalog__title">Каталог</h1>

    <div class="catalog__grid">
      <ProductCard v-for="product in catalog.items.value" :key="product.id" :product="product" />
    </div>

    <div v-if="!catalog.isError.value" class="catalog__controls">
      <button
        v-if="catalog.hasNext.value && !catalog.isLoadingMore.value"
        class="btn btn--secondary"
        type="button"
        @click="catalog.loadMore"
      >
        Показать ещё
      </button>
      <div v-else-if="catalog.isLoadingMore.value" class="catalog__loading">Загрузка...</div>
    </div>

    <div v-if="catalog.isError.value" class="catalog__error">
      <div class="catalog__error-text">
        {{ catalog.errorMessage.value }}
      </div>
      <button class="btn btn--secondary" type="button" @click="catalog.retry">Повторить</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/tokens' as t;
@use '../assets/scss/mixins' as m;

.catalog {
  display: flex;
  flex-direction: column;
  gap: 110px;
  justify-content: center;
  align-items: center;

  &__title {
    font-weight: 500;
    font-size: 42px;
    line-height: 110%;
    text-transform: uppercase;
  }

  &__grid {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @include m.mq-down(lg) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @include m.mq-down(md) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include m.mq-down(sm) {
      gap: 20px;
    }
  }

  &__controls {
    margin: 0;
  }

  &__loading {
    padding: 24px 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
  }

  &__error {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  &__error-text {
    margin: 0;
    padding: 24px 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(0, 0, 0, 1);
  }
}
</style>
