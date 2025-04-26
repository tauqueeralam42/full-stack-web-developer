import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

export default function Blogs() {

  //consume
  const {loading,posts} = useContext(AppContext);

  return (
    <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]">
       {
        loading ? 

        (<Spinner/>) : 
        (
          posts.length === 0 ? (
            <div>
              <p>No Post Found
              </p>
            </div>
          ) : 
          (posts.map((post) => (<Card key={post.id} post = {post} />) ))
        )
       }
    </div>
  )
}
