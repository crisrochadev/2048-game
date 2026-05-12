import { defineStore } from 'pinia'
import { createInitialGrid, mergeCells, spawnTile } from '../engine/gameEngine'
import { levelFromXp, nextGoal } from '../progression/xpSystem'
import { loadState, saveState } from '../persistence/saveAdapter'

const fresh = () => ({
  grid: createInitialGrid(),
  score: 0,
  bestScore: 0,
  highestBlock: 4,
  xp: 0,
  coins: 0,
  stats: { merges: 0, sessions: 1 },
  boosters: { removeTile: 1, undo: 1 }
})

export const useMergeInfinityStore = defineStore('mergeInfinity', {
  state: () => loadState() || fresh(),
  getters: {
    level: (s) => levelFromXp(s.xp),
    goal () { return nextGoal(this.level) }
  },
  actions: {
    merge(from, to) {
      const result = mergeCells({ grid: this.grid, from, to, score: this.score, highest: this.highestBlock, xp: this.xp })
      if (!result.valid) return false
      this.score = result.score
      this.xp = result.xp
      this.highestBlock = result.highest
      this.bestScore = Math.max(this.bestScore, this.score)
      this.stats.merges += 1
      spawnTile(this.grid)
      saveState(this.$state)
      return true
    },
    persist() { saveState(this.$state) }
  }
})
