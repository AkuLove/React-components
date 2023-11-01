import axios, { AxiosResponse } from 'axios';
import { ISwapiPeople } from '../types/interfaces/ISwapiPeople';
import { ISwapiResponse } from '../types/interfaces/ISwapiResponse';

class DataManager {
  state: ISwapiPeople[] = [];

  getSwapiPeople = async (searchValue = '', page = 1) => {
    const response: Promise<AxiosResponse<ISwapiResponse, string>> = axios.get(
      `https://swapi.dev/api/people/?format=json&page=${page}&search=${searchValue}`
    );
    const res = await response;
    this.state = res.data.results;
    return res.data;
  };
}

export default DataManager;
