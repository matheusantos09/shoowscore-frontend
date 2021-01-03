import apiDataBase from './api';

export function fetchElementByTitle(title: string): any {
  return apiDataBase.get(`/search/${encodeURI(title)}`);
}

export function fetchElementById(typeId: string): any {
  const [type, id] = typeId.split('||');

  if (!type && !id) {
    throw new Error('Args not send');
  }

  return apiDataBase.get(`/${type}/${id}`);
}
