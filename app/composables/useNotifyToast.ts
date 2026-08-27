const visible = ref(false)

export function useNotifyToast() {
  return {
    visible,
    show: () => { visible.value = true },
    hide: () => { visible.value = false },
  }
}
