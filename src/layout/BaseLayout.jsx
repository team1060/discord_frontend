import LayoutContainer from './LayoutContainer';
import ServerNav from './ServerNav';

const BaseLayout = () => {
  return (
    <>
      <div id="layout">
        <header className="header">
          <div className="header-logo">
            <h1 className="small">LOGO</h1>
          </div>
        </header>
        <main className="main">
          <nav className="nav-server">
            <ServerNav></ServerNav>
          </nav>
          <div className="chatroom-wrap">
            <nav className="nav-chatroom">
              <header className="nav-header">`2`</header>
              <article className="nav-article">`3`</article>
              <footer className="nav-footer">
                <div className="nav-footer-wrapper">`4`</div>
                <div className="nav-footer-container">`5`</div>
              </footer>
            </nav>
            <section className="section">
              <header className="section-header">`6`</header>
              <div className="chat-title">
                <article className="section-article">`7`</article>
                <aside className="section-aside">`8`</aside>
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

export default BaseLayout;
