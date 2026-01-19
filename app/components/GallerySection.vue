<script setup lang="ts">
   import { ref, onMounted, onUnmounted } from 'vue'

   const images = [
      {
         src: '/images/hero-fire.jpg',
         alt: 'Fire performance at night gathering',
         span: 'col-span-2 row-span-2',
      },
      {
         src: '/images/community-gathering.jpg',
         alt: 'Community gathering at dusk',
         span: 'col-span-1 row-span-1',
      },
      {
         src: '/images/pop-up-event.jpg',
         alt: 'Pop-up community event',
         span: 'col-span-1 row-span-1',
      },
      {
         src: '/images/fire-art.jpg',
         alt: 'Fire spinner creating patterns',
         span: 'col-span-2 row-span-1',
      },
   ]

   const selectedImage = ref<string | null>(null)

   const openLightbox = (src: string) => {
      selectedImage.value = src
   }

   const closeLightbox = () => {
      selectedImage.value = null
   }

   // Close on escape key
   onMounted(() => {
      const handleEscape = (e: KeyboardEvent) => {
         if (e.key === 'Escape') closeLightbox()
      }
      window.addEventListener('keydown', handleEscape)
      onUnmounted(() => window.removeEventListener('keydown', handleEscape))
   })
</script>

<template>
   <section id="gallery" class="section-padding bg-card">
      <div class="container-custom">
         <!-- Header -->
         <div
            class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
         >
            <div>
               <h2
                  class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-balance"
               >
                  Moments of
                  <span class="text-gradient">Pure Joy</span>
               </h2>
            </div>
            <a
               href="https://instagram.com/viral_happiness"
               target="_blank"
               rel="noopener noreferrer"
               class="btn-secondary self-start sm:self-auto"
            >
               <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
               >
                  <path
                     d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
               </svg>
               See More on Instagram
            </a>
         </div>

         <!-- Gallery Grid -->
         <div
            class="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
         >
            <button
               v-for="(image, index) in images"
               :key="index"
               :class="[
                  'relative rounded-2xl overflow-hidden group cursor-pointer',
                  image.span,
               ]"
               @click="openLightbox(image.src)"
            >
               <img
                  :src="image.src"
                  :alt="image.alt"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               />
               <div
                  class="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300 flex items-center justify-center"
               >
                  <div
                     class="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100"
                  >
                     <svg
                        class="w-6 h-6 text-background"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                     </svg>
                  </div>
               </div>
            </button>
         </div>

         <!-- Instagram Feed Hint -->
         <div class="mt-8 text-center">
            <p class="text-muted-foreground">
               Follow
               <a
                  href="https://instagram.com/viral_happiness"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary hover:underline"
                  >@viral_happiness</a
               >
               for more photos and event updates
            </p>
         </div>
      </div>

      <!-- Lightbox -->
      <Teleport to="body">
         <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
         >
            <div
               v-if="selectedImage"
               class="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
               @click="closeLightbox"
            >
               <button
                  class="absolute top-4 right-4 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                  aria-label="Close lightbox"
                  @click.stop="closeLightbox"
               >
                  <svg
                     class="w-6 h-6"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </button>
               <img
                  :src="selectedImage"
                  alt="Enlarged gallery image"
                  class="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
                  @click.stop
               />
            </div>
         </Transition>
      </Teleport>
   </section>
</template>
