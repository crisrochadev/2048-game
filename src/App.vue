<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark text-white">
    <q-page-container>
      <q-page class="q-pa-md">
        <div class="header q-mb-md">
          <div>
            <h1>Merge Infinity</h1>
            <p>Goal atual: {{ store.goal }} • Level {{ store.level }}</p>
          </div>
          <q-btn color="primary" label="Continuar" @click="store.persist"/>
        </div>
        <div class="stats q-mb-md">
          <q-badge color="primary">Score {{ store.score }}</q-badge>
          <q-badge color="secondary">Best {{ store.bestScore }}</q-badge>
          <q-badge color="accent">Maior {{ store.highestBlock }}</q-badge>
        </div>
        <MergeInfinityBoard />
        <q-list class="q-mt-lg card">
          <q-item><q-item-section>Classic</q-item-section><q-item-section side>Em breve</q-item-section></q-item>
          <q-item><q-item-section>Slide</q-item-section><q-item-section side>Em breve</q-item-section></q-item>
          <q-item><q-item-section>Drop</q-item-section><q-item-section side>Em breve</q-item-section></q-item>
        </q-list>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import MergeInfinityBoard from './games/merge-infinity/components/MergeInfinityBoard.vue'
import { useMergeInfinityStore } from './games/merge-infinity/stores/useMergeInfinityStore'
const store = useMergeInfinityStore()
</script>
<style scoped>
h1{font-size:1.6rem;margin:0}.header{display:flex;justify-content:space-between;align-items:center}.stats{display:flex;gap:8px;flex-wrap:wrap}.card{background:#1f2937;border-radius:14px}
</style>
