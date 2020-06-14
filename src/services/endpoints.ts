import apiDataBase from "./api";

export function fetchElementByTitle( title: string ) {
  return apiDataBase.get(`/films?q=${ title }`)
}
