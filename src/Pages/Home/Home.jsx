import React,{useState} from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';
function Home() {

  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <FoodDisplay category={category}/>
      <AppDownload/>



    </div>
  )
}

export default Home
