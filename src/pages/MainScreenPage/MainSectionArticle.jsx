import PropTypes from 'prop-types';
import OnlineSectionContent from './OnlineSectionContent';
import AllSectionContent from './AllSectionContent';
import WaitingSectionContent from './WaitingSectionContent';
import BlockedSectionContent from './BlockedSectionContent';
import AddFriendSectionContent from './AddFriendSectionContent';

const MainSectionArticle = ({ selectedTab }) => {
  let sectionContent;

  switch (selectedTab) {
    case '온라인':
      sectionContent = <OnlineSectionContent />;
      break;
    case '모두':
      sectionContent = <AllSectionContent />;
      break;
    case '대기 중':
      sectionContent = <WaitingSectionContent />;
      break;
    case '차단 목록':
      sectionContent = <BlockedSectionContent />;
      break;
    case '친구 추가하기':
      sectionContent = <AddFriendSectionContent />;
      break;
    default:
      sectionContent = null;
  }

  return <div>{sectionContent}</div>;
};

MainSectionArticle.propTypes = {
  selectedTab: PropTypes.string.isRequired,
};

export default MainSectionArticle;
