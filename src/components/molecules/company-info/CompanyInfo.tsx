import React from "react";
import FooterList from "../footer-list/FooterList";
import "./CompanyInfo.css";

const CompanyInfo: React.FC = () => {
  return (
    <div className="company-info">
      <FooterList
        target="#kategori"
        pChildren="Kategori"
        id="kategori"
        ulChildren={
          <>
            <li>Digital & Teknologi</li>
            <li>Pemasaran</li>
            <li>Manajemen Bisnis</li>
            <li>Pengembangan Diri</li>
            <li>Desain</li>
          </>
        }
      />
      <FooterList
        target="#perusahaan"
        pChildren="Perusahaan"
        id="perusahaan"
        ulChildren={
          <>
            <li>Tentang Kami</li>
            <li>FAQ</li>
            <li>Kebijakan Privasi</li>
            <li>Ketentuan Layanan</li>
            <li>Bantuan</li>
          </>
        }
      />

      <FooterList
        target="#komunitas"
        pChildren="Komunitas"
        id="komunitas"
        ulChildren={
          <>
            <li>Tip Sukses</li>
            <li>Blog</li>
          </>
        }
      />
    </div>
  );
};

export default CompanyInfo;
