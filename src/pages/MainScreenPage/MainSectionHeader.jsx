import PropTypes from 'prop-types';
import { FriendIcon } from 'assets/images/icons/fa';
import { HelpCircleIcon, MailIcon, MessagePlusIcon } from 'assets/images/icons/tb';

const MainSectionHeader = ({ selectedTab, onTabChange, tabs }) => {
  return (
    <div id="main-section-header">
      <div className="header-wrapper">
        <div className="header-inner">
          <div className="children">
            <div className="avatarWrapper">
              <FriendIcon size="24" />
            </div>
            <div className="titleWrapper">
              <h2 className="title base">친구</h2>
            </div>
            <div className="divider"></div>
            <div className="tabBar">
              {tabs.map((tabName) => (
                <h3
                  key={tabName}
                  className={`item ${selectedTab === tabName ? 'active' : ''} ${
                    tabName === '친구 추가하기' ? 'addFriend' : ''
                  }`}
                  onClick={() => onTabChange(tabName)}>
                  {tabName}
                </h3>
              ))}
            </div>
          </div>
          <div className="toolbar">
            <div className="iconWrapper">
              <div className="icon">
                <MessagePlusIcon size="24" />
              </div>
              <div className="divider"></div>
            </div>
            <div className="iconWrapper">
              <div className="icon">
                <MailIcon size="24" />
              </div>
            </div>
            <div className="iconWrapper">
              <div className="icon">
                <HelpCircleIcon size="24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MainSectionHeader.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MainSectionHeader;
