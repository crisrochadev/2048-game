<template>
  <button class="tile" :class="`v-${Math.log2(value)}`" @click="$emit('pick')">{{ value }}</button>
</template>

<script setup>
defineProps({ value: { type: Number, required: true } })
defineEmits(['pick'])
</script>

<style scoped>
.tile { width: 100%; aspect-ratio: 1; border: 0; border-radius: 12px; color:#fff; font-weight:700; background:#334155; }
.v-1,.v-2{background:#2563eb}.v-3,.v-4{background:#0284c7}.v-5,.v-6{background:#7c3aed}.v-7,.v-8{background:#db2777}
</style>
