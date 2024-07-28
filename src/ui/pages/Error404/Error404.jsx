import "./Error404.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <section className="main-error">
        <div className="corpo-error">
          <h1 className="error">Error 404</h1>
          <button className="error-voltar">
            <Link to="/">Voltar para Home</Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Error;
