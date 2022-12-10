import React, { useEffect, useState } from 'react';
import Post from './Post';
import "./Timeline.css";
import TweetBox from './TweetBox';
import db from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import Flipmove from "react-flip-move";

function Timeline() {

  const [posts,setPosts]=useState([]);

  useEffect(()=>{

    const postData=collection(db,"posts");
    const q=query(postData,orderBy("timestamp","desc"))

    // リアルタイムでデータを取得
    onSnapshot(q,(querySnapshot)=>{
      setPosts(querySnapshot.docs.map((doc)=>{
        return (
          doc.data()
        )
      }))
    })

  },[])

  return (
    <div className='timeline'>
      {/* Header */}
        <div className='timeline--header'>
          <h2>ホーム</h2>
        </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <Flipmove>
      {posts.map((post)=>{
        return (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        )
      })}
      </Flipmove>
    </div>
  )
}

export default Timeline