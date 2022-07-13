import { Animal } from "../APIResponsesTypes";

export default function changeAnimal(payload: Animal) {
  return {
    type: "CHANGE_ANIMAL",
    payload,
  } as const;
}

export type Action = ReturnType<typeof changeAnimal>;
