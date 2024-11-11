import React from "react";

const UserProfilePage: React.FC = () => {
  return (
    <div className="user-profile">
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5em"}}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625em" }}>
          <h2>Ubah Profil</h2>
          <p>Ubah data diri Anda</p>
        </div>
        <ul className="profile-list">
          <li>Profil Saya</li>
          <li>Kelas Saya</li>
          <li>Pesanan Saya</li>
        </ul>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default UserProfilePage;
