export const search = (term, order = false) => ({ type: 'SEARCH', payload: { term, order } })
export const searched = (result) => ({ type: 'SEARCHED', payload: result })
