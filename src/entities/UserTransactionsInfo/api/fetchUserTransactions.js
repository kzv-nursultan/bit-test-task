import { axios } from "../../../shared/configs/axios";
import { API } from "../../../shared/consts/api";

export const fetchUserTransactions = async (id) => {
  const { data } = await axios.get(API.userTransactions(id));
  return data;
};
