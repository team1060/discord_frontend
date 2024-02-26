import { FaPlus } from 'react-icons/fa6';
import { FaCompass } from 'react-icons/fa';
import ServerInner from './ServerInner';

const ServerNav = () => {
  return (
    <div id="server-nav">
      <div className="scroller">
        <div className="tutorialContainer">
          <div className="listItem">
            <div className="pill wrapper">
              <span className="item"></span>
            </div>
            <div>
              <img className="childWrapper" src="/img/default_profile/5.jpg" alt="default profile" />
            </div>
          </div>
        </div>

        <div className="listItem">
          <div className="guildSeparator"></div>
        </div>
        <ServerInner></ServerInner>

        <div className="listItem">
          <div className="pill wrapper">
            <span className="item"></span>
          </div>
          <div>
            <div className="childWrapper distinct">
              <FaPlus size="20" />
            </div>
          </div>
        </div>
        <div className="listItem">
          <div className="pill wrapper">
            <span className="item"></span>
          </div>
          <div>
            <div className="childWrapper distinct">
              <FaCompass size="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerNav;
