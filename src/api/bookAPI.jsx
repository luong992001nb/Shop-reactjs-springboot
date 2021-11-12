import instance from "./instance";

export const creat = (books) =>{
const url = "/books";
return instance.post(url,books);
};
export const list = () =>{
    const url = "/books";
    return instance.get(url);
};
export const read = (id) => {
    const url = "/books/" + id;
    return instance.get(url);
};
export const remove = (id) => {
    const url = "/books/" + id;
    return instance.delete(url);
};
export const update = (books) => {
    const url = "/books/" + books.id;
    return instance.post(url, books);
  };