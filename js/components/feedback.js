export const createLoading = (
  message = 'Cargando Pokémon...'
) => {
  return `
    <div class="loading">
      <p>${message}</p>
    </div>
  `
}

