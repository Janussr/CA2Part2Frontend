import Login from "./Login";
import LoggedIn from "./LoggedIn";


function Home(props) {
  const {
    loggedIn,
    login,
    logout,
    errorMessage,
    setErrorMessage,
    setLoggedIn,
  } = props;
  return (
    <div className="center">
      <h4> {errorMessage}</h4>
      {!loggedIn ? (
        <Login login={login} />
      ) : (
        <div>
          <LoggedIn
            setLoggedIn={setLoggedIn}
            setErrorMessage={setErrorMessage}
          />
          <button onClick={logout} className="btn btn-danger">Logout</button>
        </div>)}
        
    </div>
  );
}
export default Home;
