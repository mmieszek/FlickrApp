import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

export default function InformationRow({ title, content }) {
  const contentWithoutNewLines = content ?
    content.replace(/(\r\n\t|\n|\r\t)/gm, '') :
    ''
  return (
    <Container>
      <Label>{title}</Label>
      <Text>{contentWithoutNewLines}</Text>
    </Container>
  )
}
InformationRow.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding-vertical: 7px;
  border-bottom-color: #EFF0F1;
`
const Label = styled.Text`
  color: #878787;
`
