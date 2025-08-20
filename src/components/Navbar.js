import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Açık menüyü dışarı tıklayınca kapatmak için event listener ekliyoruz
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Eğer menü açıksa ve tıklama menü veya buton dışında bir yere yapıldıysa kapat
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      {/* Hamburger Menü Butonu */}
      <button className="menu-btn" onClick={handleMenuClick}>
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Logo ve Firma İsmi Ortalanmış */}
      <Link to="/" className="brand">
        <img src="/logo/ciftcilogo.png" alt="" className="logo" />
        <span className="company-name">ÇİFTÇİ KONUT İNŞAAT</span>
      </Link>

      {/* Yanda Açılan Menü */}
      <div ref={menuRef} className={`side-menu ${menuOpen ? "open" : ""}`}>
        <img src="/logo/logo.svg" alt="" className="logo" />
        <ul className="menu">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Ana Sayfa</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projeler</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Hizmetler</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>Hakkında</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>İletişim</Link></li>
         {/* <li><Link to="/chatbot">Asistan</Link></li> */}

        </ul>

        {/* Sosyal Medya Bağlantıları */}
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
            <FaInstagram  />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube">
            <FaYoutube  />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
