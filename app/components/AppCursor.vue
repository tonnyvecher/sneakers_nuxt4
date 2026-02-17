<script setup lang="ts">
const { enabled, state } = useCustomCursor()
</script>

<template>
  <div
    v-if="enabled"
    class="app-cursor"
    :class="{
      'app-cursor--pointer': state.isPointer,
      'app-cursor--down': state.isDown,
      'app-cursor--hidden': state.isHidden,
    }"
    :style="{
      transform: `translate3d(${state.x}px, ${state.y}px, 0)`,
    }"
    aria-hidden="true"
  >
    <span class="app-cursor__square" />
    <span class="app-cursor__outline" />
  </div>
</template>

<style lang="scss" scoped>
.app-cursor {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  pointer-events: none;

  --c: rgba(255, 0, 0, 1);

  --inner: 15px;
  --inner-hover: 12px;
  --outer: 15px;
  --outer-hover: 26px;
  --border: 2px;

  opacity: 1;
  transition: opacity 140ms ease;

  &--hidden {
    opacity: 0;
  }

  &__square,
  &__outline {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);
  }

  &__square {
    width: var(--inner);
    height: var(--inner);
    background: var(--c);
    transition:
      width 180ms ease,
      height 180ms ease,
      transform 180ms ease;
  }

  &__outline {
    width: var(--outer);
    height: var(--outer);
    border: var(--border) solid var(--c);
    opacity: 0;
    transition:
      width 220ms ease,
      height 220ms ease,
      opacity 160ms ease,
      transform 220ms ease;
  }

  &--pointer {
    .app-cursor__square {
      width: var(--inner-hover);
      height: var(--inner-hover);
    }

    .app-cursor__outline {
      width: var(--outer-hover);
      height: var(--outer-hover);
      opacity: 1;
    }
  }

  &--down {
    .app-cursor__square {
      width: 11px;
      height: 11px;
    }

    .app-cursor__outline {
      width: 22px;
      height: 22px;
      opacity: 1;
    }
  }
}
</style>
