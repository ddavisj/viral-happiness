<script setup lang="ts">
   const activities = [
      {
         icon: 'fire',
         title: 'Fire Performances',
         description:
            'Mesmerizing fire spinning, poi, staff, and flow arts performances that light up the night and captivate audiences of all ages.',
         image: '/images/fire-art.jpg',
      },
      {
         icon: 'music',
         title: 'Live Music & DJs',
         description:
            'Local musicians and DJs create the perfect soundtrack for our gatherings, from ambient beats to dancefloor fillers.',
         image: '/images/pop-up-event.jpg',
      },
      {
         icon: 'people',
         title: 'Pop-Up Gatherings',
         description:
            'Spontaneous community events in parks, beaches, and public spaces that transform ordinary locations into magical meeting points.',
         image: '/images/community-gathering.jpg',
      },
      {
         icon: 'workshop',
         title: 'Skill Sharing',
         description:
            'Learn flow arts, fire spinning, and other skills from experienced practitioners in a supportive, encouraging environment.',
         image: '/images/hero-fire.jpg',
      },
   ]

   const getIcon = (icon: string) => {
      const icons: Record<string, string> = {
         fire: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
         music: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
         people:
            'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
         workshop:
            'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      }
      return icons[icon] || icons.fire
   }
</script>

<template>
   <section id="what-we-do" class="section-padding">
      <div class="container-custom">
         <!-- Header -->
         <div class="text-center max-w-3xl mx-auto mb-16">
            <h2
               class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-balance"
            >
               Igniting Joy Through
               <span class="text-gradient">Creative Gatherings</span>
            </h2>
            <p class="text-muted-foreground leading-relaxed text-pretty">
               From fire performances that light up the night to spontaneous
               community gatherings, we create spaces where people come together
               to celebrate life, art, and connection.
            </p>
         </div>

         <!-- Activities Grid -->
         <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div
               v-for="(activity, index) in activities"
               :key="activity.title"
               class="group card overflow-hidden"
            >
               <div class="flex flex-col sm:flex-row gap-6">
                  <!-- Image -->
                  <div class="sm:w-1/3 flex-shrink-0">
                     <div
                        class="relative rounded-xl overflow-hidden aspect-square"
                     >
                        <img
                           :src="activity.image"
                           :alt="activity.title"
                           class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                           class="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"
                        />
                        <div class="absolute bottom-3 left-3">
                           <div
                              class="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center"
                           >
                              <svg
                                 class="w-5 h-5 text-white"
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    :d="getIcon(activity.icon)"
                                 />
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Content -->
                  <div class="flex-1 flex flex-col justify-center">
                     <h3
                        class="font-heading text-xl font-bold mt-1 mb-3 group-hover:text-primary transition-colors"
                     >
                        {{ activity.title }}
                     </h3>
                     <p class="text-muted-foreground leading-relaxed">
                        {{ activity.description }}
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <!-- CTA -->
         <div class="text-center mt-12">
            <a href="#events" class="btn-primary">
               See Upcoming Events
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
      </div>
   </section>
</template>
