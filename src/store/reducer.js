export default function reducer(state, { type, payload }) {
    switch (type) {
        case "MENU_TOGGLE":
        return {
            ...state,
            isMenu:payload,
        };
        default:
      return state;
    }
}