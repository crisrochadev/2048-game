import { GRID_ROWS, GRID_COLS } from '../core/types'
import { canMerge, mergedValue } from '../rules/mergeRules'
import { gainXp } from '../progression/xpSystem'

const id = () => crypto.randomUUID()
const spawnValue = () => (Math.random() < 0.75 ? 2 : 4)

export const createInitialGrid = () => {
  const grid = Array.from({ length: GRID_ROWS }, () => Array(GRID_COLS).fill(null))
  for (let i = 0; i < 8; i++) spawnTile(grid)
  return grid
}

export const spawnTile = (grid) => {
  const empties = []
  grid.forEach((row, r) => row.forEach((cell, c) => !cell && empties.push([r, c])))
  if (!empties.length) return false
  const [r, c] = empties[Math.floor(Math.random() * empties.length)]
  grid[r][c] = { id: id(), value: spawnValue() }
  return true
}

export const mergeCells = ({ grid, from, to, score, highest, xp }) => {
  const [fr, fc] = from
  const [tr, tc] = to
  const a = grid[fr][fc]
  const b = grid[tr][tc]
  if (!canMerge(a, b)) return { valid: false }
  const value = mergedValue(a.value)
  grid[tr][tc] = { id: id(), value }
  grid[fr][fc] = null
  return { valid: true, score: score + value, highest: Math.max(highest, value), xp: xp + gainXp(value) }
}
