import Api from './api.service'

const getRepresentatives = async state => {
  try {
    const { data } = await Api.get(`representatives/${state}`)

    return data.results
  } catch (error) {
    throw error
  }
}

const getSenators = async state => {
  try {
    const { data } = await Api.get(`senators/${state}`)

    return data.results
  } catch (error) {
    throw error
  }
}

export default {
  getRepresentatives,
  getSenators,
}
