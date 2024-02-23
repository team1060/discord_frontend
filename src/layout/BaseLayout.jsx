const BaseLayout = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <h1 className="small">LOGO</h1>
        </div>
      </header>
      <main className="main">
        <nav className="nav-server">nav</nav>
        <div className="chatroom-wrap">
          <nav className="nav-chatroom">
            <header className="nav-header">nav-header</header>
            <article className="nav-article">nav-article</article>
            <footer className="nav-footer">nav-footer</footer>
          </nav>
          <section className="section">
            <header className="section-header">section-header</header>
            <div className="chat-title">
              <article className="section-article">div-article</article>
              <aside className="section-aside">div-aside</aside>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default BaseLayout;
