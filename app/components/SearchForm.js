import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

export default function SearchForm({ value, onChangeText }) {
  return (
    <Container>
      <Title>Search</Title>
      <QueryInput
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
        placeholder='Photo Search'
      />
    </Container>
  )
}
SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
}

const Container = styled.View`
  padding-top: 45px;
  padding-horizontal: 20px;
  height: 150px;
  align-self: stretch;
`
const Title = styled.Text`
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 10px;
`
const QueryInput = styled.TextInput`
  align-self: stretch;
  border-radius: 10px;
  background-color: #F1F1F3;
  padding: 10px;
`
