// Importamos la función que traduce los tipos de Pokémon 
// // del inglés al español para mostrarlos en la interfaz. 
import {
  translatePokemonType
} from '../utils/typeTranslations.js'

// Formatea el ID del Pokémon utilizando siempre tres dígitos. 
// // Ejemplos: 
// // 1 -> #001 
// // 25 -> #025 
// // 150 -> #150 
const formatPokemonId = (id) => {
  return `#${String(id).padStart(3, '0')}`
}


// Genera los chips correspondientes a los tipos del Pokémon. 
// // // Recibe un array de tipos, por ejemplo: 
// // ['fire', 'flying'] 
// // // Cada tipo se transforma en un elemento HTML 
// // con una clase específica y su nombre traducido. 
const createTypeChips = (types) => {
  return types
    .map(
      (type) => `
        <span class="type-chip type-chip--${type}">
          ${translatePokemonType(type)}
        </span>
      `
    )
    .join('')
}
    // Une todos los chips generados 
    // 
    // en una única cadena de texto. .join('') } 
    // 
    // Genera y devuelve el HTML completo 
    // 
    // de una tarjeta individual de Pokémon. 
    // 
    // 
    // El objeto pokemon debe contener: 
    // 
    // - id 
    // 
    // - name 
    // 
    // - image 
    // 
    // - types 
    // 
    // 
    // La tarjeta guarda el ID del Pokémon en data-pokemon-id 
    // 
    // para poder identificarlo posteriormente desde JavaScript. 
    // 
    // 
    // Si la imagen principal no puede cargarse, 
    // 
    // se utiliza una imagen placeholder como reemplazo. 
   export const createPokemonCard = (pokemon) => {
  return `
    <button
      class="pokemon-card"
      type="button"
      data-pokemon-id="${pokemon.id}"
      aria-label="Ver detalles de ${pokemon.name}"
    >
      <img
        class="pokemon-card__image"
        src="${pokemon.image}"
        alt="${pokemon.name}"
        onerror="
          this.onerror=null;
          this.src='./assets/images/pokemon-placeholder.svg';
        "
      >

      <span class="pokemon-card__id">
        ${formatPokemonId(pokemon.id)}
      </span>

      <h3 class="pokemon-card__name">
        ${pokemon.name}
      </h3>

      <div class="pokemon-display__types">
        ${createTypeChips(pokemon.types)}
      </div>
    </button>
  `
}