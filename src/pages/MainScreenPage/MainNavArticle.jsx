import Channel from '../../components/Channel/Channel';
import Scroller from '../../components/Scroller/Scroller';
import { PATH } from '../../utils/paths/paths';
import { FaUserFriends, FaShoppingBag, FaPlus } from 'react-icons/fa';

const MainNavArticle = () => {
  const handleDirectMessageAdd = {};
  return (
    <div id="main-nav-article">
      <Scroller>
        <ul>
          <div style={{ height: '8px' }}></div>
          <Channel link={PATH.MAIN_SCREEN} avatar={<FaUserFriends size="24" />} name="친구"></Channel>
          <Channel link={PATH.SHOP} avatar={<FaShoppingBag size="24" />} name="상점"></Channel>
          <h2 className="small channer-header">
            <span className="header-text">다이렉트 메시지</span>
            <div className="header-button" onClick={handleDirectMessageAdd}>
              <FaPlus />
            </div>
          </h2>
        </ul>
      </Scroller>
    </div>
  );
};

export default MainNavArticle;
