import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { media } from '../theme/globalStyle'

const validJustifyValues = [
  'center',
  'flex-end',
  'flex-start',
  'space-between',
  'space-around'
]
const Wrapper = styled.div`
  color: white;
  margin: 3rem 0 1rem 0;
  background-color: ${props =>
    props.color || props.theme.secondary.green};
  padding: 10px 20px;
  display: flex;
  justify-content: ${props =>
    (validJustifyValues.includes(props.set) && props.set) ||
    'flex-end'};
  ${media.desktop`
    padding: 0.5em;
    margin-top: 2.5rem;
  `};
  ${media.phone`
    margin-top: 2.5rem;
  `};
`
Wrapper.propTypes = {
  set: PropTypes.string.isRequired
}

const Divider = props => (
  <Wrapper set={props.justify} color={props.background}>
    {props.children}
  </Wrapper>
)

Divider.propTypes = {
  justify: PropTypes.string.isRequired,
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node
}

export default withTheme(Divider)
