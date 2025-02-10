<script setup lang="ts">
import { ref, defineComponent, PropType } from 'vue'

// Importa las imágenes locales
// Ajusta la ruta a tus carpetas y nombres de archivo
import exploreImage from '../images/explore.png.png'
import libraryImage from '../images/library.png.png'
import subscriptionsbImage from '../images/subscriptionsb.png.png'

// Variable para controlar la vista activa
const vistaActiva = ref<'inicio' | 'explorar' | 'suscripciones' | 'biblioteca'>('inicio')

// Función para cambiar la vista
function cambiarVista(nuevaVista: 'inicio' | 'explorar' | 'suscripciones' | 'biblioteca') {
  vistaActiva.value = nuevaVista
}

// Comprueba si una vista está activa
function estaActiva(vista: string) {
  return vistaActiva.value === vista
}

// Componente Tarjeta (cada "vista" muestra una)
const Tarjeta = defineComponent({
  name: 'Tarjeta',
  props: {
    nombreVista: {
      type: String as PropType<string>,
      required: true,
    },
  },
  template: `
    <article class="tarjeta">
      <div class="imagen">
        <img src="https://picsum.photos/seed/example/300/200" alt="imagen" />
      </div>
      <div class="contenido-texto">
        <h2>¿Qué hay de nuevo en {{ nombreVista }}?</h2>
        <p>
          Aquí iría la descripción de esta sección.<br>
          Puedes personalizar el texto según la vista.
        </p>
        <p class="autor">by {{ nombreVista }}</p>
        <div class="acciones">
          <button>Favorito</button>
          <button>Añadir a lista</button>
        </div>
      </div>
    </article>
  `,
})
</script>

<template>
  <div class="contenedor">
    <!-- Barra de navegación con 4 secciones -->
    <nav class="barra-navegacion">
      <!-- Botón Inicio (mantiene el ícono Material Symbols) -->
      <button
        class="boton-nav"
        :class="{ activo: estaActiva('inicio') }"
        @click="cambiarVista('inicio')"
      >
        <span class="material-symbols-outlined icono" :class="{ filled: estaActiva('inicio') }">
          home
        </span>
        <span class="texto-boton">Inicio</span>
      </button>

      <!-- Botón Explorar (imagen local) -->
      <button
        class="boton-nav"
        :class="{ activo: estaActiva('explorar') }"
        @click="cambiarVista('explorar')"
      >
        <img :src="exploreImage" alt="Explorar" class="icono-img" />
        <span class="texto-boton">Explorar</span>
      </button>

      <!-- Botón Suscripciones (imagen local) -->
      <button
        class="boton-nav"
        :class="{ activo: estaActiva('suscripciones') }"
        @click="cambiarVista('suscripciones')"
      >
        <img :src="subscriptionsbImage" alt="Suscripciones" class="icono-img" />
        <span class="texto-boton">Suscripciones</span>
      </button>

      <!-- Botón Biblioteca (imagen local) -->
      <button
        class="boton-nav"
        :class="{ activo: estaActiva('biblioteca') }"
        @click="cambiarVista('biblioteca')"
      >
        <img :src="libraryImage" alt="Biblioteca" class="icono-img" />
        <span class="texto-boton">Biblioteca</span>
      </button>
    </nav>

    <!-- Contenido según la vista activa -->
    <section class="contenido">
      <div v-if="vistaActiva === 'inicio'">
        <Tarjeta :nombreVista="'Inicio'" />
      </div>
      <div v-else-if="vistaActiva === 'explorar'">
        <Tarjeta :nombreVista="'Explorar'" />
      </div>
      <div v-else-if="vistaActiva === 'suscripciones'">
        <Tarjeta :nombreVista="'Suscripciones'" />
      </div>
      <div v-else-if="vistaActiva === 'biblioteca'">
        <Tarjeta :nombreVista="'Biblioteca'" />
      </div>
    </section>
  </div>
</template>

<style scoped>
/*
  Si deseas usar la fuente de Google para el ícono "home",
  puedes mantener el @font-face o un <link> en tu index.html.
*/
@font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 100 700;
  src: url('https://fonts.gstatic.com/icon/font?kit=kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsKTAIU3c28&skey=b8dc2088854b122f&v=v226')
    format('woff2');
}

/* ======== Contenedor general ======== */
.contenedor {
  text-align: center;
  margin: 2rem auto;
  max-width: 800px;
}

/* ======== Barra de navegación ======== */
.barra-navegacion {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  border: 2px solid rgb(204, 137, 190);
  border-radius: 10px;
  background-color: #d7a0dc;
}

.boton-nav {
  display: flex;
  flex-direction: column; /* ícono/imagen arriba, texto abajo */
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.boton-nav:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

.boton-nav.activo {
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px #0a5a8e;
}

/* Ícono Material (para Inicio) */
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48;
  font-size: 32px;
  color: #333;
  transition: color 0.3s ease;
}

.icono.filled {
  font-variation-settings: 'FILL' 1;
  color: #0a5a8e;
}

/* Íconos locales (Explorar, Suscripciones, Biblioteca) */
.icono-img {
  width: 32px;
  height: 32px;
  object-fit: contain; /* cover, si prefieres */
  margin-bottom: 4px;
}

/* Texto debajo del ícono/imagen */
.texto-boton {
  font-size: 0.85rem;
  color: #333;
}

/* ======== Contenido principal ======== */
.contenido {
  margin-top: 2rem;
}

/* ======== Tarjeta ======== */
.tarjeta {
  display: flex;
  flex-wrap: nowrap;
  background-color: #f3edf7;
  border-radius: 10px;
  padding: 1rem;
  align-items: center;
  gap: 1.5rem;
  text-align: left;
}

.tarjeta .imagen img {
  max-width: 200px;
  border-radius: 8px;
  object-fit: cover;
}

.tarjeta .contenido-texto {
  flex: 1;
}

.tarjeta .contenido-texto h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.tarjeta .contenido-texto p {
  margin: 0.5rem 0;
}

.tarjeta .contenido-texto .autor {
  font-style: italic;
  color: #666;
  margin-top: 1rem;
}

.tarjeta .acciones {
  margin-top: 1rem;
}

.tarjeta .acciones button {
  margin-right: 0.5rem;
  background-color: #1283d1;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tarjeta .acciones button:hover {
  background-color: #0a5a8e;
}
</style>
