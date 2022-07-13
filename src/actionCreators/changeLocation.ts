export default function changeLocation(payload: string) {
  return {
    type: "CHANGE_LOCATION",
    payload,
  };
}

export type Action = ReturnType<typeof changeLocation>;
