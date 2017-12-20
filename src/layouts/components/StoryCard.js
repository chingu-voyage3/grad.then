import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StyledH3, StyledP } from '../../theme/globalStyle'
import { ButtonBig } from '../components/Button'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: 'img text text';
  background: ${props => props.theme.primary.light};
  border-radius: 4px;
`

const StoryTitle = StyledH3.extend`
  color: ${props => props.theme.white};
  margin: 0.5rem 0;
  padding: 0rem;
  grid-column: 1 / span 4;
  grid-row: 1 / span 1;
`

const StoryText = StyledP.extend`
  color: ${props => props.theme.white};
  margin: 0.2rem 0.2rem 1rem 0.2rem;
  padding: 0rem;
  grid-column: 1 / span 4;
  grid-row: 2 / span 2;
`

const Text = styled.div`
  grid-area: text;
  padding: 0.5rem;
  margin: 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-content: start;
`

const Image = styled.img`
  grid-area: img;
  justify-self: center;
  margin: 1.3rem 0.5rem 0.5rem 0.5rem;
  border-radius: 90px;
  border: 1px solid #000;
  width: 6.25rem;
  height: 6.25rem;
`
const ButtonContainer = styled.div`
  grid-column: 2 / span 2;
  grid-row: 4 / span 1;
`

class StoryCard extends React.Component {
  render() {
    return (
      <Wrapper>
        <Image src={this.props.img} />
        <Text>
          <StoryTitle>{this.props.title}</StoryTitle>
          <StoryText>{this.props.text}</StoryText>
          <ButtonContainer>
            <ButtonBig
              color={props => props.theme.white}
              border={props => props.theme.white}
            >
              read more
            </ButtonBig>
          </ButtonContainer>
        </Text>
      </Wrapper>
    )
  }
}

StoryCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string
}

export default StoryCard
