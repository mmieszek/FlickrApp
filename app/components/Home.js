import React, { Component } from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { pageSize, apiKey, photosPerRow } from '../config'
import Thumbnail from './Thumbnail'
import SearchForm from './SearchForm'

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      phrase: 'cats',
      page: 1,
      photos: [],
    }
  }

  onChangeText = (phrase) => {
    this.setState({ phrase })
    clearTimeout(this.debounce)
    this.debounce = setTimeout(() => {
      this.setState({ page: 1, photos: [] }, () => {
        this.fetchPhotos()
      })
    }, 750)
  }

  fetchPhotos = async () => {
    const { page, phrase } = this.state
    const url = 'https://api.flickr.com/services/rest/?' +
      'method=flickr.photos.search&extras=media,original_format,description,o_dims' +
      `&per_page=${pageSize}&api_key=${apiKey}&content_type=1&sort=interestingness-desc&format=json&nojsoncallback=1` +
      `&text=${phrase}&page=${page}`

    const response = await fetch(url)
    const data = await response.json()
    if (data && data.photos) {
      const allPhotos = data.photos.photo
      const photos = []
      while (allPhotos.length) {
        photos.push(allPhotos.splice(0, photosPerRow))
      }
      this.setState(state => ({
        photos: [...state.photos, ...photos],
        page: state.page + 1,
      }))
    }
  }

  showDetails = (photo) => {
    this.props.navigation.navigate('Details', { photo })
  }

  render() {
    const { photos, phrase } = this.state
    return (
      <Container>
        <SearchForm value={phrase} onChangeText={this.onChangeText} />
        <FlatList
          data={photos}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <Thumbnail photosRow={item} onPress={this.showDetails} />}
          onEndReached={this.fetchPhotos}
          onEndReachedThreshold={0.8}
        />
      </Container>
    )
  }
}
Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}
const Container = styled.View`
  flex: 1;
  background-color: white;
`
