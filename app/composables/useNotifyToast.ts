const visible = ref(false)

export function useNotifyToast() {
  return {
    visible,
    show: () => {
      visible.value = true
      window.umami?.track('notify-toast-open')
    },
    hide: () => { visible.value = false },
  }
}
