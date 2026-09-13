export const setBackendStatus = (element, status) => {
  if (!element) return

  element.classList.remove(
    'status-light--online',
    'status-light--offline',
    'status-light--checking'
  )

}