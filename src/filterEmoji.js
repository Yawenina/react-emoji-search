import emojiList from './emojiList';

export default function filterEmoji(searchText, maxResult) {
  return emojiList.filter(emoji => {
    if (emoji.title.includes(searchText)) {
      return true;
    }
    if (emoji.keywords.includes(searchText)) {
      return true;
    }
    return false;
  }).slice(0, maxResult);
};
