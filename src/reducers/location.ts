import { Action } from "../actionCreators/changeLocation";

export default function location(state = "", action: Action) {
  {
    switch (action.type) {
      case "CHANGE_LOCATION":
        return action.payload;
      default:
        return state;
    }
  }
}
