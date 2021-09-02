import { types } from "../types";

export const carReducer = (state = { carShop: [] }, action) => {
  switch (action.type) {
    case types.add:
      return {
        carShop: [...state.carShop, action.payload],
      };

    case types.delete:
      return {
        carShop: action.payload,
      };

    default:
      return state;
  }
};
