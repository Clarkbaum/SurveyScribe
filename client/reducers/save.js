export function save(state = false, action) {
  switch (action.type) {
    case 'SAVE_SURVEY':
      state = true;
      return state;
    case 'TOGGLE_SAVE':
      state = false;
      return state;
    default:
      return state;
  }
}

export default save;