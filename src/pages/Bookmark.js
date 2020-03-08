import React from 'react'
import styled from 'styled-components'

export default function Bookmark({ id, onBookmarkClick, isBookmarked }) {
    return (
      <BookmarkStyled onClick={() => onBookmarkClick(id)} active={isBookmarked} />
    )
  }

const BookmarkStyled = styled.button`
  height: 30px;
  padding: 0;
  outline: 0;
  background: transparent;
  border: 10px solid ${props => (props.active ? 'red' : 'lightgray')};
  border-bottom-color: transparent;
  position: absolute;
  right: 20px;
  top: -5px;
  `

