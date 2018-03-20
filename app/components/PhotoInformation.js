import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import InformationRow from './InformationRow'

export default function PhotoInformation({ photo }) {
  return (
    <Container>
      <Title>Information</Title>
      <InformationRow title='Title' content={photo.title} />
      <InformationRow title='Description' content={photo.description._content} />
    </Container>
  )
}
PhotoInformation.propTypes = {
  photo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
      _content: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

const Container = styled.View`
  padding: 10px;
  height: 150px;
  background-color: white;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`
