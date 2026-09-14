export const createCollectionForm = (pokemon) => {
  return `
    <section class="view">

      <h2 class="view__title">
        Agregar a colección
      </h2>

      <div class="form-panel">

        <p>
          Agregar
          <strong>${pokemon.name}</strong>
        </p>

        <form id="collection-form">

          <div class="form-field">
            <label for="collection-nickname">
              Apodo
            </label>

            <input
              id="collection-nickname"
              name="nickname"
              type="text"
              maxlength="50"
              placeholder="Ejemplo: Chispita"
            >
          </div>

          <div class="form-field">
            <label for="collection-notes">
              Notas
            </label>

            <textarea
              id="collection-notes"
              name="notes"
              maxlength="250"
              placeholder="Escribí una nota..."
            ></textarea>
          </div>

          <div class="form-actions">

            <button
              class="
                screen-button
                screen-button--secondary
              "
              id="collection-cancel"
              type="button"
            >
              Cancelar
            </button>

            <button
              class="screen-button"
              type="submit"
            >
              Guardar
            </button>

          </div>

        </form>

      </div>

    </section>
  `
}
