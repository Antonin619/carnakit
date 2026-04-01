<template>
  <div class="page-backdrop relative min-h-screen overflow-hidden text-ink-900">
    <div class="background-wash pointer-events-none fixed inset-0"></div>

    <main class="relative z-10 mx-auto w-full max-w-[1220px] px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <header class="mb-20 md:mb-8 md:justify-start flex justify-center">
        <img
          class="w-36 object-contain md:w-40"
          src="/assets/img/logo-cropped.png"
          alt="CarnaKit"
        />

      </header>

      <section class="mb-16 grid gap-8 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:items-center">
        <div class="flex flex-col gap-5 lg:col-span-5">
          <p class="section-kicker">Kit prêt à pêcher</p>

          <h1 class="display-title text-[clamp(3.1rem,7vw,5.8rem)] text-ink-950">
            Kit Bar du Bord
          </h1>

          <p class="max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Tout le nécessaire pour pêcher le bar en port, en digue ou en bord
            de mer, avec des leurres complémentaires, les accessoires utiles et
            un guide papier relié à des vidéos tutoriels.
          </p>

        </div>

        <div class="lg:col-span-7 lg:col-start-6 lg:row-span-2">
          <div class="glass-panel flex min-h-[420px] items-center justify-center p-6 sm:min-h-[560px] lg:min-h-[680px] lg:p-8">
            <img
              class="h-full w-full object-contain"
              src="/assets/img/visuels/kit-bardubord.jpg"
              alt="Visuel du kit Bar du Bord"
            />
          </div>
        </div>

        <div class="flex flex-col gap-5 lg:col-span-5">
          <div class="flex flex-wrap gap-3">
            <span
              v-for="chip in heroChips"
              :key="chip"
              class="soft-chip"
            >
              {{ chip }}
            </span>
          </div>

          <div class="glass-panel max-w-xl p-5 sm:p-6">
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <p class="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-sea-700/80">
                  Prix
                </p>
                <strong class="mt-1 block text-[clamp(2rem,5vw,3rem)] leading-none text-ink-950">
                  {{ product.price }}
                </strong>
              </div>

              <div>
                <p class="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-sea-700/80">
                  Stock
                </p>
                <strong class="mt-1 block text-lg text-ink-950">
                  {{ product.stock }}
                </strong>
                <span class="mt-1 block text-sm text-slate-500">
                  {{ product.stockNote }}
                </span>
              </div>
            </div>

            <button
              class="primary-button mt-4 cursor-not-allowed"
              type="button"
              aria-disabled="true"
            >
              Acheter le kit
            </button>

            <p class="mt-3 text-center text-sm text-slate-500">
              Bouton de démonstration
            </p>
          </div>
        </div>
      </section>

      <!-- <section class="mb-16">
        <div class="mb-6 flex flex-col gap-2">
          <p class="section-kicker">Le contenu du kit</p>
          <h2 class="display-title text-[clamp(2rem,4.5vw,3.4rem)] text-ink-950">
            Essentiel, lisible, prêt à servir
          </h2>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <article
            v-for="item in summaryItems"
            :key="item.title"
            class="summary-card"
          >
            <p class="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-sea-700/80">
              {{ item.quantity }}
            </p>
            <h3 class="mt-2 text-lg font-semibold leading-snug text-ink-950">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-sm leading-7 text-slate-500">
              {{ item.caption }}
            </p>
          </article>
        </div>
      </section> -->
      
      <p class="section-kicker text-xl">Le contenu du kit</p>
      <section
        v-for="(section, index) in contentSections"
        :key="section.title"
        class="my-6 grid items-center gap-6 lg:grid-cols-12"
      >
        <div
          :class="index % 2 === 1 ? 'lg:order-2 lg:col-span-7' : 'lg:col-span-7'"
        >
          <div class="glass-panel flex min-h-[320px] items-center justify-center p-4 sm:min-h-[420px] sm:p-6 lg:min-h-[540px] lg:p-8">
            <img
              class="h-full w-full object-contain"
              :src="section.image"
              :alt="section.alt"
            />
          </div>
        </div>

        <div
          :class="index % 2 === 1 ? 'lg:order-1 lg:col-span-5' : 'lg:col-span-5'"
          class="px-1 lg:px-4"
        >
          <p class="section-kicker">{{ section.tag }}</p>
          <h2 class="display-title mt-2 text-[clamp(2rem,4vw,3.2rem)] text-ink-950">
            {{ section.title }}
          </h2>
          <p class="mt-4 max-w-[34rem] text-base leading-8 text-slate-500">
            {{ section.text }}
          </p>

          <ul class="mt-5 space-y-3">
            <li
              v-for="detail in section.details"
              :key="detail"
              class="detail-item"
            >
              {{ detail }}
            </li>
          </ul>

          <div class="mt-5 flex flex-wrap gap-3">
            <span
              v-for="usage in section.usages"
              :key="usage"
              class="usage-pill"
            >
              {{ usage }}
            </span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
type SummaryItem = {
  quantity: string
  title: string
  caption: string
}

type ContentSection = {
  tag: string
  title: string
  text: string
  image: string
  alt: string
  details: string[]
  usages: string[]
}

const product = {
  price: "49,90 €",
  stock: "En stock",
  stockNote: "12 kits disponibles"
}

const heroChips = [
  "9 leurres",
  "Matériel de montage",
  "Guide papier",
  "Tutoriels vidéo"
]

const summaryItems: SummaryItem[] = [
  {
    quantity: "1 ensemble",
    title: "Black Minnow + fluoro + agrafes",
    caption: "La base discrète pour monter proprement et pêcher vite."
  },
  {
    quantity: "1 leurre",
    title: "Leurre de surface 12 g",
    caption: "Pour déclencher en surface quand le poisson chasse haut."
  },
  {
    quantity: "2 shads",
    title: "Shads blanc et sable",
    caption: "Deux options pour prospecter, tenir la ligne et lancer loin."
  },
  {
    quantity: "5 leurres",
    title: "Dark Sleeper de fond",
    caption: "À sortir quand il faut ralentir et gratter le fond."
  },
  {
    quantity: "1 guide",
    title: "Guide papier + vidéos",
    caption: "Animations, nœuds, astuces et QR codes en un seul support."
  }
]

const contentSections: ContentSection[] = [
  {
    tag: "Montage & finesse",
    title: "Black Minnow, fluorocarbone et agrafes",
    text: "Le Black Minnow est un leurre souple très naturel, idéal pour le bar. Efficace en animation lente près du fond, il passe partout grâce à son montage anti-accrocs et déclenche facilement les poissons méfiants.",
    image: "/assets/img/visuels/visumaterielbar.jpg",
    alt: "Black Minnow, bobine de fluorocarbone et agrafes",
    details: [
      "1 Black Minnow 70 kaki + 1 corps de leurre",
      "1 bobine de fluorocarbone 100 m · 0,32 mm · 12 kg",
      "10 agrafes prêtes à monter"
    ],
    usages: ["Eaux claires", "Pêche lente", "Quais et roches"]
  },
  {
    tag: "Surface",
    title: "Leurre de surface 12 g",
    text: "Le leurre plaisir pour les moments où les bars montent et frappent haut dans l’eau.",
    image: "/assets/img/visuels/visuleurresurface.jpg",
    alt: "Leurre de surface du kit Bar du Bord",
    details: [
      "1 leurre de surface de 12 g",
      "Idéal pour couvrir vite une zone",
      "Animation simple, visible et nerveuse"
    ],
    usages: ["Aube", "Soir", "Mer calme"]
  },
  {
    tag: "Prospection",
    title: "Les deux shads du kit",
    text: "Deux profils complémentaires pour chercher du poisson actif, tenir la profondeur et pêcher plus large.",
    image: "/assets/img/visuels/visu-leurres-shad.jpg",
    alt: "Shads blanc et sable du kit Bar du Bord",
    details: [
      "1 shad blanc plombé de 8 cm + 2 corps",
      "1 shad couleur sable de 15,5 g",
      "Parfaits pour le linéaire, le courant et la distance"
    ],
    usages: ["Prospection rapide", "Courant", "Lancers plus longs"]
  },
  {
    tag: "Fond",
    title: "5 Dark Sleeper de plusieurs coloris",
    text: "Les leurres à garder pour les périodes calmes, quand il faut rester bas et insister près du fond.",
    image: "/assets/img/visuels/visudarksleeper.jpg",
    alt: "Dark Sleeper de plusieurs coloris",
    details: [
      "5 leurres de fond",
      "Plusieurs coloris pour varier selon l’eau et la lumière",
      "Très efficaces en pêche lente et précise"
    ],
    usages: ["Périodes calmes", "Grattage", "Zones plus creuses"]
  },
  {
    tag: "Guide & vidéos",
    title: "Le guide papier du kit",
    text: "Un support simple à garder avec soi pour savoir quoi monter, quoi animer et quoi regarder avant la session.",
    image: "/assets/img/visuels/visuguidevideo.jpg",
    alt: "Guide papier et vidéos du kit Bar du Bord",
    details: [
      "Guide papier",
      "Animations des leurres et nœuds utiles",
      "QR codes reliés à des vidéos tutoriels"
    ],
    usages: ["Préparer la sortie", "Vérifier un nœud", "Revoir une animation"]
  }
]

useSeoMeta({
  title: "Kit Bar du Bord | CarnaKit France",
  description:
    "Page produit du Kit Bar du Bord avec visuel du kit, prix, stock, contenu détaillé et guide papier avec QR codes vidéo."
})
</script>
