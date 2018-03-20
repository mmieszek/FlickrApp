import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const photosPerRow = 3
const photoSize = width / photosPerRow
const pageSize = Math.ceil(height / photoSize) * photosPerRow * 2
const apiKey = '59927844fbee7f82643d9ca06db702dd'
const secret = '57fc93d32f557156'

export {
  photosPerRow,
  photoSize,
  pageSize,
  apiKey,
  secret,
}
