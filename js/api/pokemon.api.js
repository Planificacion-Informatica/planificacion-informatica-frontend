import { API_BASE_URL } from '../config.js'

const request = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`)
}
 if (!response.ok) {
    let message = 'Ocurrió un error al comunicarse con el backend'

    try {
      const data = await response.json()

      if (data?.error?.message) {
        message = data.error.message
      }
    } catch {
      // Si el backend no devuelve JSON válido,
      // conservamos el mensaje genérico.
    }

       throw new Error(message)
  }

  return response.json()
