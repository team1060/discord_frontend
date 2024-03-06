import PropTypes from 'prop-types';
import FriendSection from 'components/FriendSection';
import AddFriendSectionContent from 'components/AddFriendSectionContent';

const MainSectionArticle = ({ selectedTab }) => {
  let sectionContent;

  switch (selectedTab) {
    case '온라인':
      sectionContent = <FriendSection state="online" stateFriend="온라인" />;
      break;
    case '모두':
      sectionContent = <FriendSection state="all" stateFriend="모든 친구" />;
      break;
    case '대기 중':
      sectionContent = <FriendSection state="pending" stateFriend="대기 중" />;
      break;
    case '차단 목록':
      sectionContent = <FriendSection state="blocked" stateFriend="차단" />;
      break;
    case '친구 추가하기':
      sectionContent = <AddFriendSectionContent />;
      break;
    default:
      sectionContent = null;
  }

  return <>{sectionContent}</>;
};

MainSectionArticle.propTypes = {
  selectedTab: PropTypes.string.isRequired,
};

export default MainSectionArticle;
