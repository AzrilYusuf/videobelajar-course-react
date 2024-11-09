import React from "react";

const ProductMenu: React.FC = () => {
  return (
    <ul className="menu-list">
      <li>
        <a href="./home.html" style={{ color: "hsl(11, 92%, 55%)" }}>
          Semua Kelas
        </a>
      </li>
      <li>
        <a href="#">Pemasaran</a>
      </li>
      <li>
        <a href="#">Desain</a>
      </li>
      <li>
        <a href="#">Pengembangan Diri</a>
      </li>
      <li>
        <a href="#">Bisnis</a>
      </li>
    </ul>
  );
};

export default ProductMenu;
