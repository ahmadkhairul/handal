import { GET_ORDER } from "../config/constants";
import { data } from "../data/dummy";

export const getOrder = () => {
  return {
    type: GET_ORDER,
    payload: async () => {
      return data;
    }
  };
};
