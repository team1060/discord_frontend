import { useState } from 'react';
import BaseLayout from '../../layout/BaseLayout';
import MainNavArticle from './MainNavArticle';
import MainNavHeader from './MainNavHeader';
import MainSectionArticle from './MainSectionArticle';
import MainSectionHeader from './MainSectionHeader';

function MainScreenPage() {
  const [selectedTab, setSelectedTab] = useState('온라인'); // 기본값 : 온라인

  // 선택된 탭에 따라 섹션 내용을 변경하는 함수
  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  // 다섯 개의 탭 이름 배열 생성
  const tabs = ['온라인', '모두', '대기 중', '차단 목록', '친구 추가하기'];

  return (
    <div id="main-screen">
      <BaseLayout
        navHeader={<MainNavHeader />}
        navArticle={<MainNavArticle />}
        sectionHeader={<MainSectionHeader tabs={tabs} selectedTab={selectedTab} onTabChange={handleTabChange} />}
        sectionArticle={<MainSectionArticle tabs={tabs} selectedTab={selectedTab} />}
        sectionAside="<MainSectionAside />"
      />
    </div>
  );
}

export default MainScreenPage;
