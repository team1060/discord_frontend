import BaseLayout from '../../layout/BaseLayout';
import MainNavArticle from './MainNavArticle';
import MainNavHeader from './MainNavHeader';

function MainScreenPage() {
  return (
    <div id="main-screen">
      <BaseLayout
        navHeader={<MainNavHeader />}
        navArticle={<MainNavArticle />}
        sectionHeader="<MainSectionNavHeader />"
        sectionArticle="<MainSectionArticle />"
        sectionAside="<MainSectionAside />"
      />
    </div>
  );
}

export default MainScreenPage;
