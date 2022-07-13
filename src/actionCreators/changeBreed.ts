export default function changeBreed(payload: string) {
  return {
    type: "CHANGE_BREED",
    payload,
  };
}

export type Action = ReturnType<typeof changeBreed>;
