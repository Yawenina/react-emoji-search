import React from 'react';
import PropTypes from 'prop-types';

const EmojiResultRow = (props) => {

  const codePointHex = props.symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  function handleClick() {
    props.emojiClicked(props);
  }

  return (
    <button className="emoji-result-row" onClick={handleClick}>
      <img src={src} alt={props.title} width="32" height="32"/>
      <span>{props.title}</span>
    </button>
  )
};

EmojiResultRow.propTypes = {
  emojiClicked: PropTypes.func.isRequired,
};

export default EmojiResultRow;
