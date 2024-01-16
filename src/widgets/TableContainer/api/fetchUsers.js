import { axios } from "../../../shared/configs/axios";
import { API } from "../../../shared/consts/api";

export const fetchUsers = async (page, search, orderBy) => {
  const { data } = await axios.get(API.usersList, {
    params: {
      search,
      page,
      orderBy,
    },
  });
  return data;
};

export const fetchUserTransactions = async (id) => {
  const { data } = await axios.get(API.userTransactions(id));
  return data;
};
