import { type KeyboardEvent } from "react";

export const onEnterKey = (e: KeyboardEvent<HTMLInputElement>, cb: () => void) => {
  if (e.key !== "Enter") return;
  e.preventDefault();

  cb();
};
