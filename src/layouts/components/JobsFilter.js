import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import { StyledA, StyledH3 } from '../../theme/globalStyle'
import { Button } from './Button'

const FilterContainer = styled.div`
  grid-area: filt;
  display: block;
  margin: 0 auto;
  margin-top: 0.1rem;
  margin-bottom: 11rem;
`

const StyledFilter = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`

const FilterTitle = StyledH3.extend`
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${props => props.theme.primary.light};
  margin: 0.5rem;
  padding: 0.5rem;
`

const FilterName = styled.button`
  min-width: 10rem;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: ${props => props.theme.primary.light};
  color: ${props => props.theme.white};
  text-transform: uppercase;
  border: none;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.secondary.red};
  }
`

const OptionContainer = styled.div`
  display: none;
  position: absolute;
  background-color: ${props => props.theme.white};
  min-width: 10rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &.show {
    display: block;
  }
`

const FilterOption = StyledA.extend`
  padding: 12px 16px;
  margin: 0;
  display: block;
  text-transform: uppercase;
  font-size: 1.1rem;
  color: ${props => props.theme.primary.dark};
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.primary.light};
  }
`
const SubmitButton = Button.extend`
  display: block;
  min-width: 10rem;
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  border-width: 2px;
  margin: 3rem 0 0 0.5rem;
`

class JobsFilter extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleOption = this.handleOption.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // events on FilterName
  handleClick(e) {
    const targetId = e.target.id,
      currOptionId = `opt-cont-${targetId.substr(-1)}`,
      currOption = document.getElementById(currOptionId)
    currOption.classList.toggle('show')
  }

  // events on OptionContainer
  handleOption(e) {
    const targetId = e.target.parentNode.id,
      num = targetId.substr(-1),
      targetParent = e.target.parentNode,
      targetText = e.target.innerText,
      currFilterId = `filter${num}`,
      currFilter = document.getElementById(currFilterId)
    currFilter.innerHTML = targetText
    targetParent.classList.remove('show')

    this.props.onChange(num, targetText.toLowerCase())
  }

  handleMouseLeave(e) {
    const targetParent = e.target.parentNode
    targetParent.classList.remove('show')
  }

  handleSubmit() {
    this.props.onSubmit()
  }

  render() {
    return (
      <FilterContainer>
        <StyledFilter>
          <FilterTitle>jobs type</FilterTitle>
          <FilterName id="filter1" onClick={this.handleClick}>
            {this.props.titles[0]}
          </FilterName>
          <OptionContainer id="opt-cont-1" onMouseLeave={this.handleMouseLeave}>
            <FilterOption onClick={this.handleOption}>any</FilterOption>
            <FilterOption onClick={this.handleOption}>full-time</FilterOption>
            <FilterOption onClick={this.handleOption}>part-time</FilterOption>
            <FilterOption onClick={this.handleOption}>remote</FilterOption>
            <FilterOption onClick={this.handleOption}>internship</FilterOption>
          </OptionContainer>
        </StyledFilter>

        <StyledFilter>
          <FilterTitle>jobs role</FilterTitle>
          <FilterName id="filter2" onClick={this.handleClick}>
            {this.props.titles[1]}
          </FilterName>
          <OptionContainer id="opt-cont-2" onMouseLeave={this.handleMouseLeave}>
            <FilterOption onClick={this.handleOption}>any</FilterOption>
            <FilterOption onClick={this.handleOption}>front-end</FilterOption>
            <FilterOption onClick={this.handleOption}>back-end</FilterOption>
            <FilterOption onClick={this.handleOption}>full-stack</FilterOption>
            <FilterOption onClick={this.handleOption}>santa claus</FilterOption>
          </OptionContainer>
        </StyledFilter>

        <StyledFilter>
          <FilterTitle>location</FilterTitle>
          <FilterName id="filter3" onClick={this.handleClick}>
            {this.props.titles[2]}
          </FilterName>
          <OptionContainer id="opt-cont-3" onMouseLeave={this.handleMouseLeave}>
            <FilterOption onClick={this.handleOption}>any</FilterOption>
            <FilterOption onClick={this.handleOption}>earth</FilterOption>
            <FilterOption onClick={this.handleOption}>mars</FilterOption>
            <FilterOption onClick={this.handleOption}>our galaxy</FilterOption>
          </OptionContainer>
        </StyledFilter>

        <StyledFilter>
          <FilterTitle>time period</FilterTitle>
          <FilterName id="filter4" onClick={this.handleClick}>
            {this.props.titles[3]}
          </FilterName>
          <OptionContainer id="opt-cont-4" onMouseLeave={this.handleMouseLeave}>
            <FilterOption onClick={this.handleOption}>any</FilterOption>
            <FilterOption onClick={this.handleOption}>latest</FilterOption>
            <FilterOption onClick={this.handleOption}>last week</FilterOption>
            <FilterOption onClick={this.handleOption}>last month</FilterOption>
          </OptionContainer>
        </StyledFilter>

        <SubmitButton
          color={this.props.theme.primary.light}
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </SubmitButton>
      </FilterContainer>
    )
  }
}

JobsFilter.propTypes = {
  titles: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  theme: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
}

export default withTheme(JobsFilter)