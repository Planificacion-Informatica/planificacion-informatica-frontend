import {
  getBackendHealth,
  getPokemonByName,
  getPokemonById
} from './api/pokemon.api.js'

import {
  renderCollectionView
} from './views/collection.view.js'

import {
  createCollectionItem
} from './api/collection.api.js'

import {
  setBackendStatus
} from './components/statusIndicator.js'

import {
  createPokemonDisplay,
  bindPokemonDisplayEvents
} from './components/pokemonDisplay.js'

import {
  createLoading,
  createErrorFeedback
} from './components/feedback.js'

import {
  createCollectionForm,
  createCollectionSuccess
} from './components/collectionForm.js'

import {
  renderHomeView
} from './views/home.view.js'

import {
  renderTypesView
} from './views/types.view.js'


// ========================================
// ELEMENTOS PRINCIPALES
// ========================================

const screenContent =
  document.querySelector('#screen-content')

const backendStatus =
  document.querySelector('#backend-status')

const searchForm =
  document.querySelector('#search-form')

const searchInput =
  document.querySelector('#search-input')
  
// ========================================
// NAVEGACIÓN PRINCIPAL
// ========================================

const navHome =
  document.querySelector('#nav-home')

const navTypes =
  document.querySelector('#nav-types')

const navCollection =
  document.querySelector('#nav-collection')
