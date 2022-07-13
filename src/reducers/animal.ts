import { Animal } from "../APIResponsesTypes";
import { Action } from "../actionCreators/changeAnimal";

export default function animal(state = "" as Animal, action: Action) {
  switch (action.type) {
    case "CHANGE_ANIMAL":
      return action.payload;
    default:
      return state;
  }
}
