import ServerInner from './ServerInner';
import { Link } from 'react-router-dom';
import { PATH } from '../utils/paths/paths';

const ServerNav = () => {
  return (
    <div id="server-nav">
      <div className="scroller">
        <div className="tutorialContainer">
          <div className="listItem">
            <div className="pill wrapper">
              <span className="item"></span>
            </div>
            <Link to={PATH.MAIN_SCREEN}>
              <div className="childWrapper">
                <img className="" src="/img/default_profile/5.jpg" alt="default profile" />
              </div>
            </Link>
          </div>
        </div>

        <div className="listItem">
          <div className="guildSeparator"></div>
        </div>
        <ServerInner></ServerInner>
      </div>
    </div>
  );
};

export default ServerNav;
