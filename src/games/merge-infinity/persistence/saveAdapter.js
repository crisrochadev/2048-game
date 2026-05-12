const KEY = 'merge-infinity-save-v1'

export const saveState = (state) => localStorage.setItem(KEY, JSON.stringify(state))
export const loadState = () => {
  try { return JSON.parse(localStorage.getItem(KEY) || 'null') } catch { return null }
}
