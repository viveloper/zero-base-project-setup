import React, { useState, createElement } from 'react';

function LikeButton(props) {
  const [liked, setLiked] = useState(false);
  if (liked) {
    return 'You liked this.';
  }
  return createElement('button', { onClick: () => setLiked(true) }, 'Like');
}

export default LikeButton;
