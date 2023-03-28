import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../layout/Main/Main";
import "./ErrorPageNotFound.css";

function ErrorPageNotFound() {
  return (
    <>
      <Navbar />
      <Main>
        <div className="error_page">
          <h1>404</h1>
          <h2>Oops ! La page que vous demandez n'existe pas</h2>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </Main>
    </>
  );
}

export default ErrorPageNotFound;
