import "./RedesSociales.css";

const RedesSociales = () => {
  return (
    <div className="main center">
      <ul className="social-icons">
        <li>
          <a href="https://facebook.com">
            <i className="fab fa.fw fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <i className="fab fa.fw fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://web.whatsapp.com">
            <i className="fab fa.fw fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="https://twiter.com/inicio">
            <i className="fab fa.fw fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>

  );
};

export default RedesSociales;
