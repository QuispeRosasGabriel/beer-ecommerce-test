import { types } from "../types";

export const CarAdd = (product) => {
  return {
    type: types.add,
    payload: product,
  };
};
