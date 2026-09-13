// Importamos la función que traduce los tipos de Pokémon
// del inglés al español para mostrarlos en la interfaz.
import {
  translatePokemonType
} from '../utils/typeTranslations.js'


// Formatea el ID del Pokémon utilizando siempre tres dígitos.
// Ejemplo: 1 -> #001, 25 -> #025, 150 -> #150.
const formatPokemonId = (id) => {
  return `#${String(id).padStart(3, '0')}`
}


// Genera los chips visuales correspondientes a los tipos del Pokémon.
//
// Por cada tipo crea un <span> con:
// - una clase general: type-chip
// - una clase específica del tipo: type-chip--fire, type-chip--water, etc.
// - el nombre traducido al español.
const createTypeChips = (types) => {
  return types
    .map(
      (type) => `
        <span class="type-chip type-chip--${type}">
          ${translatePokemonType(type)}
        </span>
      `
    )
    // Une todos los chips en una única cadena HTML.
    .join('')
}


// Genera el HTML completo de una tarjeta de Pokémon.
//
// Espera recibir un objeto pokemon con:
// id, name, image y types.
export const createPokemonCard = (pokemon) => {
  return `
    <button
      class="pokemon-card"
      type="button"
      data-pokemon-id="${pokemon.id}"
      aria-label="Ver detalles de ${pokemon.name}"
    >

      <!-- Imagen del Pokémon.
           Si falla la carga, se muestra una imagen placeholder. -->
      <img
        class="pokemon-card__image"
        src="${pokemon.image}"
        alt="${pokemon.name}"
        onerror="
          this.onerror=null;
          this.src='./assets/images/pokemon-placeholder.svg';
        "
      >

      <!-- ID formateado del Pokémon -->
      <span class="pokemon-card__id">
        ${formatPokemonId(pokemon.id)}
      </span>

      <!-- Nombre del Pokémon -->
      <h3 class="pokemon-card__name">
        ${pokemon.name}
      </h3>

      <!-- Chips correspondientes a los tipos del Pokémon -->
      <div class="pokemon-display__types">
        ${createTypeChips(pokemon.types)}
      </div>
    </button>
  `
}