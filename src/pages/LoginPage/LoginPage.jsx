const LoginPage = () => {
  return (
    <div id="login-page">
      <div className="login-form">
        <form method="post" action="/register" className="login-form">
          <div className="login-page-inner">
            <div>
              <h1>돌아오신 것을 환영해요!</h1>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* <input type="text" name="user_id"></input>
          <input type="password" name="password"></input>
          <button type="submit">Create</button> */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
