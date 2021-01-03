import apiDataBase from './api';

export function fetchElementByTitle(title: string): any {
  return apiDataBase.get(`/search/${encodeURI(title)}`);
}
