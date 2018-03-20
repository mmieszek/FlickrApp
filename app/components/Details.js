import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import FlickrImage from './FlickrImage'
import PhotoInformation from './PhotoInformation'

const { width, height } = Dimensions.get('window')

export default class Details extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { params } = this.props.navigation.state
    const { photo } = params
    return (
      <Container>
        <FlickrImage photo={photo} style={{ width, height, resizeMode: 'contain' }} />
        <PhotoInformation photo={photo} />
      </Container>
    )
  }
}
Details.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        photo: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: black;
`
