import { Theme } from "../APIResponsesTypes";

export default function changeTheme(payload: Theme) {
  return {
    type: "CHANGE_THEME",
    payload,
  };
}

export type Action = ReturnType<typeof changeTheme>;
