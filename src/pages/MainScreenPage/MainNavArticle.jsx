import { useState } from 'react';
import { PATH } from 'utils/paths/paths';
import { FriendIcon, PlusIcon, ShopIcon } from 'assets/images/icons/fa';
import { Scroller, Channel } from 'components/index';

const MainNavArticle = () => {
  const [channels, setChannels] = useState([]);

  const handleDirectMessageAdd = () => {
    setChannels((prevChannels) => [
      ...prevChannels,
      { link: '', avatar: <FriendIcon size="24" />, name: '새로운 채널' },
      // 추후 실제 값으로 수정
    ]);
  };
  return (
    <div id="main-nav-article">
      <Scroller>
        <ul>
          <div style={{ height: '8px' }}></div>
          <Channel link={PATH.MAIN_SCREEN} avatar={<FriendIcon size="24" />} name="친구"></Channel>
          <Channel link={PATH.SHOP} avatar={<ShopIcon size="24" />} name="상점"></Channel>
          <h2 className="small channel-header">
            <span className="header-text">다이렉트 메시지</span>
            <div className="header-button" onClick={handleDirectMessageAdd}>
              <PlusIcon />
            </div>
          </h2>
          {channels.map((channel, index) => (
            <Channel key={index} link={channel.link} avatar={channel.avatar} name={channel.name} />
          ))}
        </ul>
      </Scroller>
    </div>
  );
};

export default MainNavArticle;
