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

export const filterOrder = filter => {
  return {
    type: FILTER_ORDER,
    payload: async () => {
      // let b = words.filter(item => item.a.indexOf('pray') > -1 && item.b.indexOf('mit') > -1);
    }
  };
};
