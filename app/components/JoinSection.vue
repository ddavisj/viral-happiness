<script setup lang="ts">
   import { ref } from 'vue'

   const email = ref('')
   const isSubmitting = ref(false)
   const isSubmitted = ref(false)

   const handleSubmit = async () => {
      if (!email.value) return

      isSubmitting.value = true

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))

      isSubmitted.value = true
      isSubmitting.value = false
      email.value = ''

      // Reset after 5 seconds
      setTimeout(() => {
         isSubmitted.value = false
      }, 5000)
   }

   const ways = [
      {
         icon: 'calendar',
         title: 'Attend an Event',
         description:
            'Come to one of our gatherings and experience the magic firsthand.',
      },
      {
         icon: 'sparkles',
         title: 'Perform With Us',
         description:
            'Share your talents - fire, flow, music, or any other creative expression.',
      },
      {
         icon: 'hands',
         title: 'Volunteer',
         description:
            'Help us set up, clean up, or spread the word about upcoming events.',
      },
   ]

   const getIcon = (icon: string) => {
      const icons: Record<string, string> = {
         calendar:
            'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
         sparkles:
            'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
         hands: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11',
      }
      return icons[icon] || icons.calendar
   }
</script>

<template>
   <section
      id="join"
      class="section-padding bg-gradient-to-b from-card to-background relative overflow-hidden"
   >
      <!-- Background Glow -->
      <div
         class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none"
      />

      <div class="container-custom relative">
         <!-- <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"> -->
         <!-- <div class="w-1/2 sm:w-full mx-auto items-center"> -->
         <div class="w-full sm:w-1/2 mx-auto items-center">
            <!-- Content -->
            <div>
               <!-- <span
                  class="text-primary font-semibold text-sm uppercase tracking-wider"
                  >Join the Movement</span
               > -->
               <h2
                  class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-balance"
               >
                  Be Part of
                  <span class="text-gradient">Something Beautiful</span>
               </h2>
               <p
                  class="text-muted-foreground leading-relaxed mb-8 text-pretty"
               >
                  Viral Happiness is built by people like you. Whether you want
                  to attend events, perform, volunteer, or simply spread joy -
                  there's a place for you in our community.
               </p>

               <!-- Ways to Join -->
               <div class="space-y-4">
                  <div
                     v-for="way in ways"
                     :key="way.title"
                     class="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                     <div
                        class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0"
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
                              :d="getIcon(way.icon)"
                           />
                        </svg>
                     </div>
                     <div>
                        <h4 class="font-semibold text-foreground">
                           {{ way.title }}
                        </h4>
                        <p class="text-sm text-muted-foreground">
                           {{ way.description }}
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Newsletter Form -->
            <!-- <div class="card border border-border p-8 lg:p-10">
          <div class="text-center mb-8">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-4 glow-orange">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-heading text-2xl font-bold mb-2">Stay Connected</h3>
            <p class="text-muted-foreground">
              Get notified about upcoming events, gatherings, and ways to get involved.
            </p>
          </div>

          <!-- Form -->
            <!-- <form v-if="!isSubmitted" class="space-y-4" @submit.prevent="handleSubmit">
            <div>
              <label for="email" class="sr-only">Email address</label>
              <input
                id="email"
                v-model="email"
                type="email"
                placeholder="Enter your email"
                required
                class="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Joining...
              </span>
              <span v-else>Join the Community</span>
            </button>
          </form> -->

            <!-- Success Message -->
            <!-- <div v-else class="text-center py-4">
            <div class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-foreground font-semibold">Welcome to the family!</p>
            <p class="text-muted-foreground text-sm">Check your inbox for a confirmation.</p>
          </div> -->

            <!-- <p class="text-center text-muted-foreground text-xs mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p> -->

            <!-- Social Links -->
            <!-- <div class="mt-8 pt-6 border-t border-border">
            <p class="text-center text-sm text-muted-foreground mb-4">Or connect with us on social media</p>
            <div class="flex justify-center gap-4">
              <a
                href="https://instagram.com/viral_happiness"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/groups/viralhappiness"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div> -->
            <!-- </div> -->
         </div>
      </div>
   </section>
</template>
