import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

export default function FlickrImage({ style, photo, size }) {
  const file = `${photo.id}_${photo.secret}${size ? `_${size}` : ''}.jpg`
  const uri = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${file}`
  return (
    <Image
      source={{ uri }}
      style={style}
    />
  )
}
FlickrImage.propTypes = {
  style: PropTypes.object,
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
    farm: PropTypes.number.isRequired,
    server: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.string,
}
