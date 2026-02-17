type CursorState = {
  x: number
  y: number
  targetX: number
  targetY: number
  isPointer: boolean
  isDown: boolean
  isHidden: boolean
}

export function useCustomCursor() {
  const enabled = ref(false)

  const state = ref<CursorState>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    isPointer: false,
    isDown: false,
    isHidden: true,
  })

  let rafId = 0

  const canUseCustomCursor = () => {
    return window.matchMedia?.('(pointer: fine)').matches
  }

  const updatePointerType = (el: Element | null) => {
    if (!el) {
      state.value.isPointer = false
      return
    }

    const interactive = (el as HTMLElement).closest(
      'a, button, input, textarea, select, summary, label, [role="button"], [data-cursor="pointer"]',
    )

    if (interactive) {
      state.value.isPointer = true
      return
    }

    const cs = window.getComputedStyle(el as Element)
    state.value.isPointer = cs.cursor === 'pointer'
  }

  const onMouseMove = (e: MouseEvent) => {
    state.value.targetX = e.clientX
    state.value.targetY = e.clientY
    state.value.isHidden = false
    updatePointerType(e.target as Element)
  }

  const onMouseDown = () => {
    state.value.isDown = true
  }

  const onMouseUp = () => {
    state.value.isDown = false
  }

  const onMouseLeave = () => {
    state.value.isHidden = true
  }

  const tick = () => {
    const ease = 0.18
    state.value.x += (state.value.targetX - state.value.x) * ease
    state.value.y += (state.value.targetY - state.value.y) * ease

    rafId = requestAnimationFrame(tick)
  }

  onMounted(() => {
    if (!canUseCustomCursor()) return

    enabled.value = true

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown, { passive: true })
    window.addEventListener('mouseleave', onMouseLeave, { passive: true })
    window.addEventListener('mouseup', onMouseUp, { passive: true })

    rafId = requestAnimationFrame(tick)
  })

  onBeforeMount(() => {
    if (!enabled.value) return

    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mousedown', onMouseDown)
    window.removeEventListener('mouseleave', onMouseLeave)
    window.removeEventListener('mouseup', onMouseUp)

    cancelAnimationFrame(rafId)
  })

  return {
    enabled,
    state,
  }
}
