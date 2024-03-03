import BaseLayout from '../../layout/BaseLayout';
import MainNavArticle from './MainNavArticle';
import MainNavHeader from './MainNavHeader';
import MainSectionHeader from './MainSectionHeader';

function MainScreenPage() {
  return (
    <div id="main-screen">
      <BaseLayout
        navHeader={<MainNavHeader />}
        navArticle={<MainNavArticle />}
        sectionHeader={<MainSectionHeader />}
        sectionArticle="<MainSectionArticle />"
        sectionAside="<MainSectionAside />"
      />
    </div>
  );
}

export default MainScreenPage;
