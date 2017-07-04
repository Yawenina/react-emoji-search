import React from 'react';
import EmojiResultRow from './EmojiResultRow';
import PropTypes from 'prop-types';

const EmojiResults = (props) => (

  <div className="emoji-results">
    {
      props.emojiData.map(emojiData => (
        <EmojiResultRow
          key={emojiData.symbol}
          symbol={emojiData.symbol}
          title={emojiData.title}
          emojiClicked={props.emojiClicked}
        />
      ))
    }
  </div>
);

EmojiResults.propTypes = {
  emojiData: PropTypes.array.isRequired,
  emojiClicked: PropTypes.func.isRequired,
};

export default EmojiResults;