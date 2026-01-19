<script setup lang="ts">
   const upcomingEvents = [
      {
         title: 'Summer Solstice Fire Gathering',
         date: 'February 15, 2026',
         time: '6:00 PM - Late',
         location: 'Edinburgh Gardens, Fitzroy North',
         description:
            'Celebrate the longest day with fire performances, live music, and community connection under the summer stars.',
         type: 'Fire Performance',
      },
      {
         title: 'Full Moon Flow Session',
         date: 'February 22, 2026',
         time: '7:30 PM - 10:00 PM',
         location: 'St Kilda Beach Foreshore',
         description:
            'Join us for a magical evening of flow arts practice, skill sharing, and ocean vibes under the full moon.',
         type: 'Workshop',
      },
      {
         title: 'Community Picnic & Jam',
         date: 'March 1, 2026',
         time: '3:00 PM - 8:00 PM',
         location: 'Princes Park, Carlton North',
         description:
            'Bring a plate to share, your instruments, and good vibes for an afternoon of food, music, and friendship.',
         type: 'Community Gathering',
      },
   ]

   const getTypeColor = (type: string) => {
      const colors: Record<string, string> = {
         'Fire Performance':
            'bg-orange-500/20 text-orange-400 border-orange-500/30',
         Workshop: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
         'Community Gathering': 'bg-red-500/20 text-red-400 border-red-500/30',
      }
      return colors[type] || colors['Community Gathering']
   }
</script>

<template>
   <section id="events" class="section-padding">
      <div class="container-custom">
         <!-- Header -->
         <div class="text-center max-w-3xl mx-auto mb-16">
            <h2
               class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-balance"
            >
               Join Us at Our
               <span class="text-gradient">Next Gathering</span>
            </h2>
            <p class="text-muted-foreground leading-relaxed text-pretty">
               All our events are free, inclusive, and open to everyone. No
               experience necessary - just bring yourself and an open heart.
            </p>
         </div>

         <!-- Events List -->
         <div class="space-y-6 max-w-4xl mx-auto">
            <article
               v-for="event in upcomingEvents"
               :key="event.title"
               class="card group hover:border-primary/30 border border-transparent"
            >
               <div class="flex flex-col md:flex-row md:items-center gap-6">
                  <!-- Date Block -->
                  <div class="flex-shrink-0">
                     <div
                        class="w-20 h-20 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex flex-col items-center justify-center text-white"
                     >
                        <span class="text-2xl font-bold">{{
                           event.date.split(' ')[1].replace(',', '')
                        }}</span>
                        <span class="text-sm uppercase">{{
                           event.date.split(' ')[0].slice(0, 3)
                        }}</span>
                     </div>
                  </div>

                  <!-- Content -->
                  <div class="flex-1">
                     <div class="flex flex-wrap items-center gap-2 mb-2">
                        <span
                           :class="[
                              'px-3 py-1 rounded-full text-xs font-medium border',
                              getTypeColor(event.type),
                           ]"
                        >
                           {{ event.type }}
                        </span>
                     </div>
                     <h3
                        class="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                     >
                        {{ event.title }}
                     </h3>
                     <p class="text-muted-foreground mb-3">
                        {{ event.description }}
                     </p>
                     <div
                        class="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
                     >
                        <div class="flex items-center gap-1">
                           <svg
                              class="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                           </svg>
                           <span>{{ event.time }}</span>
                        </div>
                        <div class="flex items-center gap-1">
                           <svg
                              class="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                           </svg>
                           <span>{{ event.location }}</span>
                        </div>
                     </div>
                  </div>

                  <!-- Action -->
                  <!-- <div class="flex-shrink-0">
                     <a
                        href="https://instagram.com/viral_happiness"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-white transition-all text-sm font-medium"
                     >
                        <span>RSVP</span>
                        <svg
                           class="w-4 h-4"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                           />
                        </svg>
                     </a>
                  </div> -->
               </div>
            </article>
         </div>

         <!-- Calendar CTA -->
         <div class="mt-12 text-center">
            <p class="text-muted-foreground mb-4">
               Stay updated on all our events
            </p>
            <a
               href="https://instagram.com/viral_happiness"
               target="_blank"
               rel="noopener noreferrer"
               class="btn-secondary"
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
               Follow for Event Updates
            </a>
         </div>
      </div>
   </section>
</template>
