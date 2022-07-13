import { Action } from "../actionCreators/changeTheme";

export default function theme(state = "darkblue", action: Action) {
  switch (action.type) {
    case "CHANGE_THEME":
      return action.payload;
    default:
      return state;
  }
}
