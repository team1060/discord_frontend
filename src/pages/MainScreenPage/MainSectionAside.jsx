import { handleLogout } from 'api/hooks/logout';
import ItemCard from 'components/ItemCard/ItemCard';
import Scroller from 'components/Scroller/Scroller';

const MainSectionAside = () => {
  return (
    <div id="main-section-aside">
      <div className="scroller-wrapper">
        <Scroller>
          <h3 className="title large">현재 활동 중</h3>
          <ItemCard></ItemCard>
          <button onClick={handleLogout}>logout</button>
        </Scroller>
      </div>
    </div>
  );
};

export default MainSectionAside;
