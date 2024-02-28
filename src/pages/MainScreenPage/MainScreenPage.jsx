import BaseLayout from '../../layout/BaseLayout';
import MainNavArticle from './MainNavArticle';
import MainNavHeader from './MainNavHeader';
import './MainScreenPage.scss';

function MainScreenPage() {
  return (
    <div id="main-screen">
      <BaseLayout
        navHeader={<MainNavHeader />}
        navArticle={<MainNavArticle />}
        navFooterWrapper="<MainNavFooterWrapper />"
        navFooterContainer="<MainNavFooterContainer />"
        sectionHeader="<MainSectionNavHeader />"
        sectionArticle="<MainSectionArticle />"
        sectionAside="<MainSectionAside />"
      />
    </div>
  );
}

export default MainScreenPage;
