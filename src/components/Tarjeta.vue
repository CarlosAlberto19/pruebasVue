<script setup lang="ts">
import { ref } from 'vue'

// Importa las imágenes locales
import exploreImage from '../images/explore.png.png'
import libraryImage from '../images/library.png.png'
import subscriptionsbImage from '../images/subscriptionsb.png.png'
import casaImage from '../images/casa.png.png'
import personImage from '../images/person.png.png' // Icono de usuario actualizado

// Variable para controlar la vista activa
const vistaActiva = ref<'inicio' | 'explorar' | 'suscripciones' | 'biblioteca'>('inicio')

// Función para cambiar la vista activa
function cambiarVista(nuevaVista: 'inicio' | 'explorar' | 'suscripciones' | 'biblioteca') {
    vistaActiva.value = nuevaVista
}

// Función para verificar qué vista está activa
function estaActiva(vista: string) {
    return vistaActiva.value === vista
}
</script>

<template>
    <div class="tarjeta">
        <!-- 📌 Barra de navegación en la parte superior -->
        <nav class="barra-navegacion">
            <button class="boton-nav" :class="{ activo: estaActiva('inicio') }" @click="cambiarVista('inicio')">
                <img :src="casaImage" alt="Inicio" class="icono-img" />
                <span class="texto-boton">Inicio</span>
            </button>

            <button class="boton-nav" :class="{ activo: estaActiva('explorar') }" @click="cambiarVista('explorar')">
                <img :src="exploreImage" alt="Explorar" class="icono-img" />
                <span class="texto-boton">Explorar</span>
            </button>

            <button class="boton-nav" :class="{ activo: estaActiva('suscripciones') }"
                @click="cambiarVista('suscripciones')">
                <img :src="subscriptionsbImage" alt="Suscripciones" class="icono-img" />
                <span class="texto-boton">Suscripciones</span>
            </button>

            <button class="boton-nav" :class="{ activo: estaActiva('biblioteca') }"
                @click="cambiarVista('biblioteca')">
                <img :src="libraryImage" alt="Biblioteca" class="icono-img" />
                <span class="texto-boton">Biblioteca</span>
            </button>
        </nav>

        <!-- 📌 Icono de usuario centrado y más grande -->
        <div class="icono-usuario">
            <img :src="personImage" alt="Usuario" />
        </div>

        <!-- 📌 Imagen y contenido -->
        <div class="contenido">
            <div class="imagen">
                
            </div>

            <div class="texto">
                <div class="autor">
                    <img class="avatar" src="https://source.unsplash.com/50x50/?person" alt="Selen Zeynep" />
                    
                </div>

                <h2>What Buttons are Artists Pushing When They Perform Live</h2>
                <p>
                    The general consensus is that artists using digital turntables are just pushing random
                    buttons when they perform live. But is that true? In the DMC Championships it’s obvious
                    that some artists are putting their various honed skills on display.
                </p>
                <p>Most of the scorn for solo performers comes from the many who headline huge festivals.</p>

                <!-- 📌 Botones de acción con efecto "ola" -->
                <div class="acciones">
                    <button class="boton-nav efecto-ola">💜 Favourite</button>
                    <button class="boton-nav efecto-ola">➕ Add to playlist</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 🎨 📌 Estilos generales */
.tarjeta {
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 20px auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 20px;
}

/* 📌 Barra de navegación */
.barra-navegacion {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #e5b3ff;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 15px;
}

/* 📌 Icono de usuario */
.icono-usuario {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}

.icono-usuario img {
    width: 80px;
    height: 80px;
}

/* 📌 Botón de navegación */
.boton-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease;
}

.boton-nav:hover {
    background-color: rgba(255, 255, 255, 0.4);
}

.boton-nav.activo {
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 10px #0a5a8e;
}

/* 📌 Efecto Ola */
.boton-nav::after {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.3);
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0;
}

.boton-nav:active::after {
    transform: translate(-50%, -50%) scale(3);
    opacity: 1;
}

/* 📌 Íconos locales */
.icono-img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    margin-bottom: 4px;
}

/* Texto debajo del ícono */
.texto-boton {
    font-size: 0.85rem;
    color: #333;
}

/* 📌 Contenido */
.contenido {
    display: flex;
    align-items: center;
    gap: 20px;
}

/* 📌 Imagen */
.imagen img {
    width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
}

/* 📌 Texto */
.texto {
    flex: 1;
}

/* 📌 Botones de acción */
.acciones {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
}

/* 📌 Aplica el mismo efecto de ola */
.efecto-ola {
    padding: 10px 15px;
    font-size: 14px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #e5b3ff;
    color: #333;
    transition: background-color 0.3s ease;
    position: relative;
    overflow: hidden;
}

.efecto-ola:active::after {
    transform: translate(-50%, -50%) scale(3);
    opacity: 1;
}
</style>
