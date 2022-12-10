import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react';
import "./TweetBox.css"
import { collection,addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {

  const [tweetMessage,setTweetMessage]=useState("");
  const [tweetImage,setTweetImage]=useState("");

  const sendTweet=(e)=>{
    // firebaseのデータベースにデータを追加する
    e.preventDefault();

    addDoc(collection(db,"posts"),{
      displayName:"プログラミングチュートリアル",
      username:"Shin_Enginner",
      verified:true,
      text:tweetMessage,
      avatar:"http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image:tweetImage,
      timestamp: serverTimestamp()
    })

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--input'>
          <Avatar />
          <input
            onChange={(e)=>setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder='今どうしてる？'
            type="text">
          </input>
        </div>
        <input 
          onChange={(e)=>setTweetImage(e.target.value)}
          value={tweetImage}
          className='tweetBox--imageInput' 
          placeholder='画像のURLを入力してください' 
          type="text">
        </input>
        <Button
          className='tweetBox--tweetButton'
          type='submit'
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox