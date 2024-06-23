import React from 'react'
import Spinner from './Spinner';
import { useState,useEffect } from 'react';
import axios from 'axios';
import useGif from '../hooks/useGif';

export default function Tag() {
    const [tag, setTag] = useState("Cat");
    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false);
  
  
    // async function fetchData() {
    //   setLoading(true)
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW&tag=${tag}`;
  
    //   const { data } = await axios.get(url);
    //   const imageSource = data.data.images.downsized_large.url;
    //   setGif(imageSource);
    //   console.log(imageSource);
    //   setLoading(false);
    // }
  
    // useEffect(() => {
    //   fetchData();
    // }, []);

    const {gif,loading,fetchData} = useGif(tag);
  
  return (
    <div className="w-1/2 bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mb-[20px]">
    <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
    {
      loading ? (<Spinner />) : (<img src= {gif} width="450" />)
    }

    <input type="text" 
    className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" 
    onChange={(event) => setTag(event.target.value)} 
    value={tag} />

    <button
      onClick={() => fetchData(tag)}
      className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]"
    >
      Generate
    </button>
  </div>
  )
}
