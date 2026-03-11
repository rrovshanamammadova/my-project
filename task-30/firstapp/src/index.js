import React from 'react';
import ReactDOM from 'react-dom/client';
import Bookimage from './components/bookimage';
import Bookname from './components/bookname';
import Bookauthor from './components/bookauthor';
import Bookprice from './components/bookprice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <Bookimage/>
  <Bookname/>
  <Bookauthor/>
  <Bookprice/>
  </>
);

