import React from 'react';
import PropTypes from 'prop-types';

const SelectedEmoji = (props) => (
  <div className="selected-emojis">
    <span className="title">You have selected:</span>
    <span className="emojis">
      {
        props.selectedEmojis.map(selected => {
          const codePointHex = selected.symbol.codePointAt(0).toString(16);
          const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
          return <img src={src} alt="" width="32" height="32" key={selected.title}/>;
        })
      }
    </span>
  </div>
);

SelectedEmoji.PropTypes = {
  selectedEmojis: PropTypes.array.isRequired,
};

export default SelectedEmoji;