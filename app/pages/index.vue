<template>
    <div class="page-wrapper">

        <!-- Heartbeat glow background -->
        <div class="heartbeat-glow"></div>
        <div class="grid-overlay"></div>

        <div class="content">
            <img class="logo" src="/assets/img/logo-cropped.png" />

            <div class="badge">BIENTÔT DISPONIBLE</div>

            <h1 class="title">La pêche,<br><span class="highlight">simplifiée.</span></h1>

            <p class="subtitle">
                CarnaKit propose des kits de pêche prêts à l'emploi, sélectionnés par des professionnels.<br>
                Choisissez votre cible — <strong>Bar, Sandre, Carpe, etc.</strong> — et recevez tout le nécessaire.
            </p>

            <ul class="features">
                <li><span class="dot"></span>Leurres</li>
                <li><span class="dot"></span>Bobines de fil</li>
                <li><span class="dot"></span>Matériel divers supplémentaire</li>
                <li><span class="dot"></span>Un guide papier pour utiliser le kit</li>
            </ul>

            <img src="/assets/img/kit-bar-du-bord.png" class="kit-img" alt="Kit Bar du bord" />

            <ComingSoonEmail />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ComingSoonEmail from '~/components/ComingSoonEmail.vue';

const devMode = true;

onMounted(async () => {
    try {
        if (!devMode) {
            await navigateTo('https://google.fr', { external: true })
        }
    } catch (error) {
        console.log(error);
    }
})
</script>

<style scoped>
.page-wrapper {
    position: relative;
    min-height: 100vh;
    width: 100%;
    background: #0d0f14;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 3rem 1.5rem;
    box-sizing: border-box;
}

/* Heartbeat glow */
.heartbeat-glow {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(29, 120, 255, 0.18) 0%, rgba(29, 120, 255, 0.04) 50%, transparent 75%);
    animation: heartbeat 2.4s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
}

@keyframes heartbeat {
    0%   { transform: translate(-50%, -50%) scale(0.95); opacity: 0.5; }
    14%  { transform: translate(-50%, -50%) scale(1.08); opacity: 1; }
    28%  { transform: translate(-50%, -50%) scale(0.98); opacity: 0.7; }
    42%  { transform: translate(-50%, -50%) scale(1.12); opacity: 1; }
    70%  { transform: translate(-50%, -50%) scale(0.95); opacity: 0.4; }
    100% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.5; }
}

/* Subtle grid */
.grid-overlay {
    position: fixed;
    inset: 0;
    background-image:
        linear-gradient(rgba(29, 120, 255, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(29, 120, 255, 0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
}

.content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    max-width: 680px;
    width: 100%;
}

.logo {
    width: 180px;
    object-fit: contain;
    filter: drop-shadow(0 0 18px rgba(29, 120, 255, 0.5));
}

.badge {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: #1d78ff;
    border: 1px solid rgba(29, 120, 255, 0.4);
    background: rgba(29, 120, 255, 0.08);
    padding: 0.3rem 1rem;
    border-radius: 999px;
    text-transform: uppercase;
}

.title {
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 800;
    color: #e8eaf0;
    line-height: 1.15;
    margin: 0;
    letter-spacing: -0.02em;
}

.highlight {
    color: #1d78ff;
    text-shadow: 0 0 30px rgba(29, 120, 255, 0.6);
}

.subtitle {
    font-size: 0.95rem;
    color: #8a90a0;
    line-height: 1.7;
    max-width: 520px;
    margin: 0;
}

.subtitle strong {
    color: #c0c6d8;
    font-weight: 600;
}

.features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(29, 120, 255, 0.12);
    border-radius: 12px;
    padding: 1.2rem 2rem;
    width: 100%;
    box-sizing: border-box;
}

.features li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9rem;
    color: #b0b8cc;
    font-weight: 500;
}

.dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1d78ff;
    box-shadow: 0 0 8px rgba(29, 120, 255, 0.8);
    flex-shrink: 0;
}

.kit-img {
    width: min(380px, 90%);
    object-fit: contain;
    filter: drop-shadow(0 8px 30px rgba(29, 120, 255, 0.2));
    border-radius: 12px;
}
</style>