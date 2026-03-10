<template>
    <div class="h-screen w-screen overflow-hidden pb-12 px-20 lg:px-4 lg:pb-4 flex flex-col items-center lg:justify-center">
        <img class="lg:w-1/4 object-contain" src="/assets/img/logo.png" />

        <NuxtLink class="shadow-lg transition-all bg-white hover:bg-gray-100 cursor-pointer rounded-full px-10 w-full lg:w-1/4 mt-auto mb-[25%] md:mb-0 md:mt-0 text-center py-6 md:py-10 lg:py-3 border-2 border-gray-600" to="https://carnakit-france.com" external>
            Accéder à la boutique
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
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