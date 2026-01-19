<script setup lang="ts">
   import { ref } from 'vue'

   const isMenuOpen = ref(false)

   const navLinks = [
      { name: 'About', href: '#about' },
      { name: 'What We Do', href: '#what-we-do' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Events', href: '#events' },
      { name: 'Join Us', href: '#join' },
   ]

   const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
   }

   const closeMenu = () => {
      isMenuOpen.value = false
   }
</script>

<template>
   <div class="dark min-h-screen bg-background text-foreground">
      <!-- Navigation -->
      <header
         class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
      >
         <nav class="container-custom section-padding !py-4">
            <div class="flex items-center justify-between">
               <!-- Logo -->
               <a href="#" class="flex items-center gap-3 group">
                  <img class="w-10 h-10" src="/android-chrome-192x192.png" />
                  <span
                     class="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors"
                  >
                     Viral Happiness
                  </span>
               </a>

               <!-- Desktop Navigation -->
               <div class="hidden md:flex items-center gap-8">
                  <a
                     v-for="link in navLinks"
                     :key="link.name"
                     :href="link.href"
                     class="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                     {{ link.name }}
                  </a>

                  <DonateButton divClass="" />

                  <a
                     href="https://instagram.com/viral_happiness"
                     target="_blank"
                     rel="noopener noreferrer"
                     class="btn-primary"
                  >
                     Follow Us
                  </a>
               </div>

               <!-- Mobile Menu Button -->
               <button
                  class="md:hidden p-2 text-foreground"
                  aria-label="Toggle menu"
                  @click="toggleMenu"
               >
                  <svg
                     v-if="!isMenuOpen"
                     class="w-6 h-6"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                     />
                  </svg>
                  <svg
                     v-else
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
            </div>

            <!-- Mobile Navigation -->
            <Transition
               enter-active-class="transition duration-200 ease-out"
               enter-from-class="opacity-0 -translate-y-2"
               enter-to-class="opacity-100 translate-y-0"
               leave-active-class="transition duration-150 ease-in"
               leave-from-class="opacity-100 translate-y-0"
               leave-to-class="opacity-0 -translate-y-2"
            >
               <div
                  v-if="isMenuOpen"
                  class="md:hidden mt-4 pb-4 border-t border-border pt-4"
               >
                  <div class="flex flex-col gap-4">
                     <a
                        v-for="link in navLinks"
                        :key="link.name"
                        :href="link.href"
                        class="text-center text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                        @click="closeMenu"
                     >
                        {{ link.name }}
                     </a>
                     <DonateButton divClass="mb-3" />
                     <div class="w-1/2 mx-auto">
                        <a
                           href="https://instagram.com/viral_happiness"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn-primary text-center block"
                        >
                           Follow on Insta
                        </a>
                     </div>
                  </div>
               </div>
            </Transition>
         </nav>
      </header>

      <!-- Main Content -->
      <main>
         <slot />
      </main>

      <!-- Footer -->
      <footer class="bg-card border-t border-border">
         <div class="container-custom section-padding !py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
               <!-- Brand -->
               <div>
                  <div class="flex items-center gap-3 mb-4">
                     <img class="w-10 h-10" src="/android-chrome-192x192.png" />

                     <span class="font-heading font-bold text-xl"
                        >Viral Happiness</span
                     >
                  </div>
                  <p class="text-muted-foreground leading-relaxed">
                     Transforming public spaces in Naarm/Melbourne into vibrant,
                     inclusive social hubs.
                  </p>
               </div>

               <!-- Quick Links -->
               <div class="sm:text-left text-center">
                  <h4 class="font-heading font-semibold text-lg mb-4">
                     Quick Links
                  </h4>
                  <div class="flex flex-col gap-2">
                     <a
                        v-for="link in navLinks"
                        :key="link.name"
                        :href="link.href"
                        class="text-muted-foreground hover:text-primary transition-colors"
                     >
                        {{ link.name }}
                     </a>
                  </div>
               </div>

               <!-- Connect -->
               <div class="sm:text-left text-center">
                  <h4 class="font-heading font-semibold text-lg mb-4">
                     Connect With Us
                  </h4>
                  <div class="flex gap-4 justify-center sm:justify-normal">
                     <a
                        href="https://instagram.com/viral_happiness"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                        aria-label="Instagram"
                     >
                        <svg
                           class="w-5 h-5"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.668.072-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                           />
                        </svg>
                     </a>
                     <a
                        href="https://facebook.com/groups/viralhappiness"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                        aria-label="Facebook"
                     >
                        <svg
                           class="w-5 h-5"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                           />
                        </svg>
                     </a>
                  </div>
                  <p class="text-muted-foreground text-sm mt-4">
                     Based on Wurundjeri Country<br />
                     Naarm/Melbourne, Australia
                  </p>
               </div>
            </div>

            <div
               class="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm"
            >
               <p>
                  We acknowledge the Wurundjeri Woi-wurrung people of the Kulin
                  Nation as the Traditional Custodians of the land on which we
                  gather.
               </p>
            </div>
            <div
               class="w-1/5 border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm mx-auto"
            ></div>
            <div class="text-center text-green-400">
               <p>
                  <a href="https://eadigital.com.au" target="_blank"
                     >Website by EA Digital</a
                  >
               </p>
            </div>
         </div>
      </footer>
   </div>
</template>
