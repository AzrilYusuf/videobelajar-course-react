import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Image from "../../atoms/Image";
import homeIcon from "../../../assets/svg/home-icon.svg";
import Avatar from "../../../assets/img/avatar.png";
import { useUserStore } from "../../../stores/userStore.ts";
import "./UserLogo.css";

const UserLogo: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const popupRef = useRef<HTMLDivElement>(null);
  const { role, clearUserData } = useUserStore((state) => state);
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  // Close the popup if the click is outside the popup area
  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsPopupOpen(false);
    }
  };

  // Close the popup when an item is clicked
  const handleItemClick = () => {
    setIsPopupOpen(false);
  };

  // Log out
  const handleLogout = () => {
    clearUserData();
    navigate("/login");
  };

  // Render if the user's role is admin
  const renderDashboard = () => {
    if (role === "admin") {
      return <li onClick={() => {navigate("/admin?tab=dashboard"); handleItemClick()}}>Dashboard</li>;
    } else {
      return null;
    }
  };

  return (
    <div className="user-logo" ref={popupRef}>
      {location.pathname !== "/" &&
      location.pathname !== "/login" &&
      location.pathname !== "/register" ? (
        <Image src={homeIcon} alt="Home logo" handleClick={() => navigate("/")} />
      ) : null}
      <p onClick={togglePopup} className="category-option">
        Kategori
      </p>
      <Image
        src={Avatar}
        alt="user-logo"
        style={{ width: "44px", height: "44px", borderRadius: "10px" }}
      />
      {isPopupOpen && (
        <div className="popup-menu">
          <ul>
            <li onClick={() => {navigate("/user?tab=profile");
              handleItemClick();}
            }>Profile Saya</li>
            {renderDashboard()}
            <li onClick={handleItemClick}>Kelas Saya</li>
            <li onClick={handleItemClick}>Pesanan Saya</li>
            <li onClick={handleLogout}>Keluar</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserLogo;
