import instance from "./instance";

export const creatCate = (category) =>{
const url = "/category";
return instance.post(url,category);
};
export const listCate = () =>{
    const url = "/category";
    return instance.get(url);
};
export const readCate = (id) => {
    const url = "/category/" + id;
    return instance.get(url);
};

export const updateCate = (category) => {
    const url = "/category/" + category.id;
    return instance.put(url, category);
  };