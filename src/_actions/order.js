import { GET_ORDER, FILTER_ORDER } from "../config/constants";
import { dummy } from "../data/dummy";

export const getOrder = () => {
  return {
    type: GET_ORDER,
    payload: async () => {
      const data = dummy;
      return data;
    }
  };
};

export const filterOrder = filter => {
  return {
    type: FILTER_ORDER,
    payload: async () => {
      // console.log(filter);
      const data = dummy.filter(
        item =>
          item.orderNumber.indexOf(filter[0]) > -1 &&
          item.from.indexOf(filter[1]) > -1 &&
          item.to.indexOf(filter[2]) > -1 &&
          item.ETA.indexOf(filter[3]) > -1 &&
          item.status.indexOf(filter[4]) > -1 &&
          item.type.indexOf(filter[5]) > -1 &&
          item.cargoType.indexOf(filter[6]) > -1 &&
          item.incoterms.indexOf(filter[7]) > -1 &&
          item.containerType.indexOf(filter[8]) > -1
      );
      return data;
    }
  };
};
