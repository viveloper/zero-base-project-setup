import React, { useState, createElement } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function LikeButton(props) {
  const [liked, setLiked] = useState(false);
  if (liked) {
    return 'You liked this.';
  }
  return createElement(Button, { onClick: () => setLiked(true) }, 'Like');
}

export default LikeButton;
