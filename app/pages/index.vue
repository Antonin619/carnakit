<template>
    <div class="h-screen w-screen overflow-hidden overflow-y-auto pb-12 px-20 pt-2 lg:px-4 lg:pb-4 flex flex-col items-center lg:justify-center">
        <img class="lg:w-1/4 object-contain" src="/assets/img/logo-cropped.png" />

        <!-- <NuxtLink class="shadow-lg transition-all bg-white hover:bg-gray-100 cursor-pointer rounded-full px-10 w-full lg:w-1/4 mt-auto mb-[25%] md:mb-0 md:mt-0 text-center py-6 md:py-10 lg:py-3 border-2 border-gray-600" to="https://carnakit-france.com" external>
            Accéder à la boutique
        </NuxtLink> -->

        <h1 class="text-xl mb-8">Boutique en préparation 🚀</h1>
        

        <div class="flex flex-col gap-4 lg:w-1/2 w-full text-center text-sm lg:text-base">

            <span>CarnaKit propose des kits de pêche prêts à utiliser.</span>
            <span>Choisissez parmi de multiples choix, <strong>Bar, Sandre, Carpe etc...</strong>, avec les kits prêts à pêcher
         , recevez pour un prix intéressant du matériel choisi spécifiquement par des professionnels.</span>

         <ul class="font-bold text-blue-600">
            <li>- Leurres</li>
            <li>- Bobines de fil</li>
            <li>- Matériel divers supplémentaire</li>
            <li>- Un guide papier pour utiliser le kit</li>
         </ul>
         <img src="/assets/img/kit-bar-du-bord.png" class="w-[400px] object-fit mx-auto" alt="">
        </div>


        

        <ComingSoonEmail />
    </div>
</template>

<script lang="ts" setup>
import ComingSoonEmail from '~/components/ComingSoonEmail.vue';

const devMode = true;

onMounted(async () => {
    try {
        if(!devMode) {
            await navigateTo('https://google.fr', { external: true })
        }
        
    } catch (error) {
        console.log(error);
    }
})
</script>