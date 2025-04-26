import { useState,useEffect } from 'react';
import axios from 'axios';


export default function useGif(tag) {

const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW`;
const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW&tag=${tag}`

    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
  
  
    async function fetchData() {
      setLoading(true)
      const { data } = await axios.get(tag ? tagUrl : randomUrl);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return {gif,loading,fetchData};
}
