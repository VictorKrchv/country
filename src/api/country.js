import Axios from "axios";

const getCountriesList = (offset) => {
  return Axios.get(
    `https://api.jqestate.ru/v1/properties/country?pagination[offset]=${offset} `
  );
};

export const countryAPI = {
  getCountriesList,
};
