import { Search } from '@mui/icons-material';
import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets--input'>
        <Search className='widgets--searchIcon' />
        <input placeholder='キーワード検索' type="text" />
      </div>
      <div className='widgets--widgetContainer'> 
        <h2>いまどうしてる？</h2>
        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed
          tweetId={'933354946111705097'}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{height: 400}}
        />
        <TwitterShareButton
          url={'https://facebook.com/saurabhnemade'}
          options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
        />
      </div>
    </div>
  )
}

export default Widgets