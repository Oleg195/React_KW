import React,{useState} from 'react';
import "./App.css";
import Info from '../Info/info';
import SearchPanel from '../Search-panel/search-panel';
import Filter from '../Filter/Filter';
import List from '../List/List';
import AddForm from '../Add-form/Add-form';
function App() 
{ const data=[
  {name:"John C",salary:800, increase:false},
  {name:"Alex N",salary:3000, increase:false},
  {name:"Nazym O",salary:1000, increase:false}
];
  return (
    <div className="main">
 <h1>Hello world</h1>
 <Info/>
 <div className='search-panel'>
 <SearchPanel/>
 <Filter/>
 </div>

 <List data={data}/> 
 <AddForm/>

    </div>
  );
}

export default App;