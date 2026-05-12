<template>
  <div class="board">
    <div v-for="(row,r) in store.grid" :key="r" class="row">
      <div v-for="(cell,c) in row" :key="c" class="slot" @click="onEmpty(r,c)">
        <TileCell v-if="cell" :value="cell.value" @pick="onPick(r,c)" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import TileCell from './TileCell.vue'
import { useMergeInfinityStore } from '../stores/useMergeInfinityStore'

const $q = useQuasar()
const store = useMergeInfinityStore()
const selected = ref(null)
const onPick = (r, c) => {
  if (!selected.value) return (selected.value = [r, c])
  const ok = store.merge(selected.value, [r, c])
  if (!ok) $q.notify({ type: 'warning', message: 'Merge inválido' })
  selected.value = null
}
const onEmpty = () => { selected.value = null }
</script>
<style scoped>
.board{display:grid;gap:8px;background:#1f2937;padding:10px;border-radius:16px}.row{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}
.slot{background:#0f172a44;min-height:48px;border-radius:10px}
</style>
