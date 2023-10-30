import { ISwapiPeople } from './ISwapiPeople';

export interface ISwapiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ISwapiPeople[];
}
