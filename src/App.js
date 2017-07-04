import _ from 'lodash';
import React, { Component } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';
import SelectedEmojis from './SelectedEmojis';

import filterEmoji from './filterEmoji';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterdEmoji: filterEmoji('', 20),
      selectedEmojis: [],
    }

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleEmojiClick = this.handleEmojiClick.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      filterdEmoji: filterEmoji(event.target.value, 20)
    })
  }

  handleEmojiClick(value) {
    let selectedEmojis = [...this.state.selectedEmojis];
    selectedEmojis.push(value);
    // uniq array items
    selectedEmojis = _.uniqBy(selectedEmojis, 'title');
    this.setState({ selectedEmojis });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <SearchInput textChange={this.handleSearchChange}/>
        <SelectedEmojis selectedEmojis={this.state.selectedEmojis}/>
        <EmojiResults 
          emojiData={this.state.filterdEmoji}
          emojiClicked={this.handleEmojiClick}
          />
      </div>
    )
  }
}

export default App;
