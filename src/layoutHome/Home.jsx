
// import Card from 'react-bootstrap/Card'
// import CardGroup from 'react-bootstrap/CardGroup'
// import ListGroup from 'react-bootstrap/ListGroup'
import { Outlet } from "react-router-dom";
import { Container} from 'reactstrap';
import Head from './Head'
import ListBook from './ListBook';
import Navbar3 from './Navbar3';
import { useEffect, useState } from "react";
import {list} from '../api/bookAPI'
import Footer from './Footer';
// import ListBook from './ListBook';

const Home = () => {
  const [books, setBooks] =  useState([])
  useEffect(()=>{
  list().then((response) =>{setBooks(response.data)});
  }
  ,[]);
  return (
    <Container > 
      <Head />
      <Navbar3 />
      <ListBook books ={books} />
      <Footer/>
      <Outlet />
    </Container>
  )
};
export default Home;