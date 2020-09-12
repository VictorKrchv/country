import { countryAPI } from "../api/country";

const SET_HOUSE_DATA = "SET_LIST";
const SET_LOAD_STATUS = "SET_LOAD_STATUS";
const CLEAR_DATA = "CLEAR_DATA"

const initialState = {
  items: [],
  pagination: {
    limit: 32,
    offset: 0,
    totalCount: null,
  },
  isLoading: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOUSE_DATA: {
      return { ...state, ...action.payload };
    }
    case CLEAR_DATA: {
      return {...state, items: []}
    }
    case SET_LOAD_STATUS: {
      return { ...state, isLoading: action.value };
    }
    default:
      return state;
  }
};

const setListData = (payload) => ({
  type: SET_HOUSE_DATA,
  payload,
});

const setLoadingStatus = (value) => ({
  type: SET_LOAD_STATUS,
  value,
});

export const clearData = () => ({
  type: CLEAR_DATA,
})

// Thunks
export const getSalesList = (page, limit) => async (dispatch) => {
  const offset = limit ? page * limit - limit : 0;
  dispatch(setLoadingStatus(true));
  try {
    const res = await countryAPI.getCountriesList(offset);
    dispatch(setLoadingStatus(false));
    return dispatch(setListData(res.data));
  } catch ({ e }) {
    dispatch(setLoadingStatus(false));
    console.log(e.response);
  }
};
