// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  runtimeConfig: {
    brevoApiKey: process.env.BREVO_API_KEY,
    brevoListId: process.env.BREVO_LIST_ID
  },
  app: {
		head: {
			meta: [
				{ name: `viewport`, content: `width=device-width, initial-scale=1` },
			],
			title: `CarnaKit France`,
		},
	},
  modules: ['@nuxtjs/tailwindcss']
})
