<script setup lang="ts">
   import { useWindowScroll } from '@vueuse/core'
   import { computed } from 'vue'

   const { y: scrollY } = useWindowScroll()

   const parallaxStyle = computed(() => ({
      transform: `translateY(${scrollY.value * 0.3}px)`,
   }))

   const donateLink = useDonateLink()
</script>

<template>
   <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
   >
      <!-- Background Image with Parallax -->
      <div class="absolute inset-0 z-0">
         <div
            class="absolute inset-0 bg-cover bg-center"
            :style="[
               parallaxStyle,
               { backgroundImage: 'url(/images/hero-fire.jpg)' },
            ]"
         />
         <div
            class="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"
         />
      </div>

      <!-- Content -->
      <div class="relative z-10 container-custom section-padding text-center">
         <div class="max-w-4xl mx-auto">
            <!-- Badge -->
            <!-- <a href="https://eadigital.com.au">
               <div
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8 animate-fade-in"
               >
                  <svg
                     class="w-5 h-5 text-primary"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                     />
                  </svg>
                  <span class="text-primary text-sm font-medium">DONATE</span>
               </div>
            </a> -->

            <DonateButton divClass="mb-3" />
            <!-- <div
               class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up mb-6"
            >
               <a :href="donateLink" class="btn-donate">
                  <svg
                     class="w-5 h-5 text-primary"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                     />
                  </svg>
                  <span class="ml-2 text-primary text-sm font-medium"
                     >DONATE</span
                  >
               </a>
            </div> -->

            <!-- Headline -->
            <h1
               class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up text-balance"
            >
               Spreading
               <span class="text-gradient">Viral Happiness</span>
               Through Community
            </h1>

            <!-- Subheadline -->
            <p
               class="text-xl sm:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up text-pretty"
               style="
                  text-shadow:
                     0 0 8px rgba(0, 0, 0, 1),
                     0 0 4px rgba(0, 0, 0, 0.9);
               "
            >
               We transform public spaces into vibrant, inclusive social hubs
               through pop-up events, fire performances, and community
               gatherings that bring people together.
            </p>

            <!-- CTAs -->
            <div
               class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            >
               <a href="#events" class="btn-primary">
                  Upcoming Events
                  <svg
                     class="w-5 h-5 ml-2"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                     />
                  </svg>
               </a>
            </div>

            <!-- Stats -->
            <div
               class="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50"
            >
               <div class="text-center">
                  <div
                     class="font-heading text-3xl sm:text-4xl font-bold text-gradient"
                  >
                     50+
                  </div>
                  <div class="text-muted-foreground text-sm mt-1">
                     Events Hosted
                  </div>
               </div>
               <div class="text-center">
                  <div
                     class="font-heading text-3xl sm:text-4xl font-bold text-gradient"
                  >
                     5K+
                  </div>
                  <div class="text-muted-foreground text-sm mt-1">
                     Community Members
                  </div>
               </div>
               <div class="text-center">
                  <div
                     class="font-heading text-3xl sm:text-4xl font-bold text-gradient"
                  >
                     10+
                  </div>
                  <div class="text-muted-foreground text-sm mt-1">
                     Public Spaces Activated
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
         <a
            href="#about"
            class="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
               />
            </svg>
         </a>
      </div>
   </section>
</template>
