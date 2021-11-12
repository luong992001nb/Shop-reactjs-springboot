import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TableBook from './TableBook';
import { remove } from '../api/bookAPI';
import { list } from "../api/bookAPI";
import { useEffect, useState } from "react";
import TabForm from './TabForm';
const TabBook = () => {
    const [books, setBooks] =  useState([])
    useEffect(()=>{
    list().then((response) =>{setBooks(response.data)});
    }
    ,[]);
    const onHandleRemove =(id)=>{
    remove(id).then(()=>{
        const newProducts = books.filter((item) => item.id !== id);
      setBooks(newProducts); 
    })}
    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Danh sach">
            <TableBook books={books} onRemove={onHandleRemove}/>
            </Tab>
            <Tab eventKey="profile" title="Profile">
            <TabForm/>
            </Tab>
        </Tabs>
    );
};
export default TabBook;