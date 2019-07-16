export const searchList = (list = [], entry = '') => {
  return list.filter(person => person.name.toLowerCase().includes(entry.toLowerCase()))
}
