import axios, { AxiosResponse } from 'axios';
import { ISwapiPeople } from '../types/interfaces/ISwapiPeople';
import { ISwapiResponse } from '../types/interfaces/ISwapiResponse';

export const getSwapiPeople = async (searchValue = '', page = 1) => {
  const response: Promise<AxiosResponse<ISwapiResponse, string>> = axios.get(
    `https://swapi.dev/api/people/?format=json&page=${page}&search=${searchValue}`
  );
  const res = await response;
  return res.data;
};

export const getSwapiPeopleById = async (id = '') => {
  const response: Promise<AxiosResponse<ISwapiPeople, string>> = axios.get(
    `https://swapi.dev/api/people/${id}/?format=json`
  );
  const res = await response;
  return res.data;
};
