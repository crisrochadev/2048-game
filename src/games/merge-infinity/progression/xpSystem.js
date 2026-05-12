import { BASE_GOAL } from '../core/types'

export const nextGoal = (level) => BASE_GOAL * (2 ** Math.floor(level / 2))
export const gainXp = (mergedValue) => Math.max(5, Math.log2(mergedValue) * 3)
export const levelFromXp = (xp) => Math.floor(Math.sqrt(xp / 40)) + 1
