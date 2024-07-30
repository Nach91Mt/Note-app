import axios from 'axios'
export const getAllNotes = () => {
  return axios.get('/notes')
    .then((response) => {
      const { data } = response
      console.log(data)
      return data
    })
}
// https://floating-mountain-93526-790e4950c4d4.herokuapp.com/notes
