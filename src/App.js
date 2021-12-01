import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LayoutWeb from './layout/web/LayoutWeb'
import LayoutAdmin from './layout/adm/LayoutAdmin'
import './App.css';
import { creat, list, remove, update } from "./api/productAPI";
import BodyHome from "./layout/web/components/BodyHome";
import ProductAdmin from "./layout/adm/componentsAdmin/ProductAdmin";
import AddProduct from "./layout/adm/componentsAdmin/AddProduct";
import EditProduct from "./layout/adm/componentsAdmin/EditProduct";
import CardProduct from "./layout/web/CardProduct";
import SingleProduct from "./layout/web/SingleProduct";
import Register from "./layout/web/Register";
import Login from "./layout/web/Login";
import PrivateAdmin from "./components/PrivateAdmin";
import CategoryAdmin from "./layout/adm/componentsAdmin/CategoryAdmin";
import { creatCate, listCate, updateCate } from "./api/categoryAPI";
import AddCategory from "./layout/adm/componentsAdmin/AddCategory";
import EditCategory from "./layout/adm/componentsAdmin/EditCategory";
import Product from "./layout/web/components/Product";
import Category from "./layout/web/components/Category";


function App() {
  const [product, setProduct] = useState([]);
  const [category,setCategory] =useState([]);
  useEffect(() => {
    list().then((response) => setProduct(response.data));
    listCate().then((response)=>setCategory(response.data));
  }, []);
  const onHandleRemote = (id) => {
    remove(id).then(() => {
      const newProduct = product.filter((item) => item.id !== id)
      setProduct(newProduct);
      toast.success("xoa thanh cong");
    });
  }
  const onhandleAdd = (data) => {
    const fakeProduct = { id: product.length + 1, ...data };
    creat(fakeProduct).then((response) =>
      setProduct([...product, response.data]));
    toast.success("thêm thành cmn công");
  }
  const onhandleAddCate = (data) => {
    const fakeCate = { id: category.length + 1, ...data };
    creatCate(fakeCate).then((response) =>
      setCategory([...category, response.data]));
    toast.success("thêm thành cmn công");
  }
  const onhandleUpdateCate = (data) => {
    updateCate(data).then(() => {
      const newCate = category.map((item) =>
        item.id === data.id ? data : item);
      toast.success("sua thanh cmn cong");
      setCategory(newCate);
    });

  }
  const onhandleUpdate = (data) => {
    update(data).then(() => {
      const newProducts = product.map((item) =>
        item.id === data.id ? data : item);
      toast.success("sua thanh cmn cong");
      setProduct(newProducts);
    });

  }
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutWeb />}>
            <Route index element={<BodyHome product={product} />}></Route>
            <Route path="product" element={<Product category={category} product={product} />}></Route>
            <Route path="product/:id/category" element={<Category product={product} categoryAp={category} />} ></Route>
            <Route path="product/:id" element={<SingleProduct product={product} />} ></Route>
            <Route path="cardproduct" element={<CardProduct />} ></Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="admin/*" element={
            <PrivateAdmin>
              <LayoutAdmin />
            </PrivateAdmin>


          }>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<div>Dashboard Product</div>} />
            <Route
              path="product" element={<ProductAdmin product={product} onRemove={onHandleRemote} />} />
            <Route
              path="category" element={<CategoryAdmin category={category}  />} />
              <Route path="category/addcategory" element={<AddCategory onAdd={onhandleAddCate} />} />
              <Route path="category/:id/edit" element={<EditCategory onUpdate={onhandleUpdateCate} />} />

            <Route path="product/addproduct" element={<AddProduct category={category}  onAdd={onhandleAdd} />} />
            <Route path="product/:id/edit" element={<EditProduct onUpdate={onhandleUpdate} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
