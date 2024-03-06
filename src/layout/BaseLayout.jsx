import LayoutContainer from 'layout/LayoutContainer';
import NavFooterContainer from 'layout/NavFooterContainer';
import NavFooterWrapper from 'layout/NavFooterWrapper';
import ServerNav from 'layout/ServerNav';
import PropTypes from 'prop-types';

const BaseLayout = (props) => {
  return (
    <>
      <div id="layout">
        <header className="header">
          <div className="header-logo">
            <h1 className="small">LOGO</h1>
          </div>
        </header>
        <main className="main">
          <nav className="server-nav">
            <ServerNav />
          </nav>
          <div className="chatroom-wrap">
            <nav className="nav-chatroom">
              <header className="nav-header">{props.navHeader}</header>
              <article className="nav-article">{props.navArticle}</article>
              <footer className="nav-footer">
                <div className="nav-footer-wrapper">
                  <NavFooterWrapper />
                </div>
                <div className="nav-footer-container">
                  {' '}
                  <NavFooterContainer />
                </div>
              </footer>
            </nav>
            <section className="section">
              <header className="section-header">{props.sectionHeader}</header>
              <div className="chat-title">
                <article className="section-article">{props.sectionArticle}</article>
                <aside className="section-aside">{props.sectionAside}</aside>
              </div>
            </section>
          </div>
        </main>
      </div>
      <div id="layer">
        <LayoutContainer></LayoutContainer>
      </div>
    </>
  );
};

BaseLayout.propTypes = {
  navHeader: PropTypes.node.isRequired,
  navArticle: PropTypes.node.isRequired,
  sectionHeader: PropTypes.node.isRequired,
  sectionArticle: PropTypes.node.isRequired,
  sectionAside: PropTypes.node.isRequired,
};

export default BaseLayout;
