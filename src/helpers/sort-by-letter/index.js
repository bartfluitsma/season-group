

// since data at this point is an object, to get array of values
// we use Object.values method
export const sortAlphabetically = (rawData) => {
  const data = rawData.reduce((r, e) => {
    // get first letter of name of current element
    const group = e.name[0]
    // if there is no property in accumulator with this letter create it
    if (!r[group]) r[group] = { group, children: [e] }
    // if there is push current element to children array for that letter
    else r[group].children.push(e)
    // return accumulator
    return r
  }, {})
  
  return Object.values(data)
} 
