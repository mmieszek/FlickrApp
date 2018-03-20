import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import FlickrImage from './FlickrImage'
import { photoSize } from '../config'

export default function Thumbnail({ photosRow, onPress }) {
  return (
    <Container>
      {photosRow.map(photo => (
        <TouchableOpacity
          key={photo.id}
          onPress={() => onPress(photo)}
          activeOpacity={0.7}
        >
          <FlickrImage photo={photo} style={{ width: photoSize, height: photoSize }} size='q' />
        </TouchableOpacity>
        ))}
    </Container>
  )
}
Thumbnail.propTypes = {
  onPress: PropTypes.func.isRequired,
  photosRow: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
}
const Container = styled.View`
  flex-direction: row;
`
