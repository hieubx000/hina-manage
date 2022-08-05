import React, { useState, useEffect } from "react";
import styles from "../sidebar/Sidebar.module.scss";
import SideBarItem from "../sidebar/sidebarItem";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { localStorageConstant } from "../../../constant/localStorage";
import { auth } from "../../../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { rootPath } from "../../../helpers/buildUrl";

export default function Navbar() {
  let navigate = useNavigate();
  const [image, setImage] = useState(
    "https://storage.googleapis.com/fjob-dev/default-avatar.png"
  );
  const user = JSON.parse(
    localStorage.getItem(localStorageConstant.userCurrent)
  );
  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem(localStorageConstant.userCurrent);
    localStorage.removeItem(localStorageConstant.token);
    navigate(rootPath.signin);
  };
  useEffect(() => {
    setImage(user.photoURL);
  }, []);

  return (
    <div className={styles.Navbar}>
      <label for="nav-mobile-input">
        <img
          className={styles.Navbar_btn}
          src="/assets/icons/sidebar/icon_bar.svg"
          alt=""
        />
      </label>

      <input
        type="checkbox"
        className={styles.nav_input}
        name=""
        id="nav-mobile-input"
      />
      <label for="nav-mobile-input" className={styles.sidebar_overlay}></label>
      <div className={styles.sidebar_mobile}>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src={image}
              className={styles.sidebar_mobile_profile_img}
              alt="profile"
            />
            <label for="nav-mobile-input">
              <img
                className={styles.Navbar_btnTime}
                src="/assets/icons/sidebar/icon_time.svg"
                alt=""
              />
            </label>
          </div>

          <div>
            <SideBarItem title="Dashboard" to="/" icon={<IoLibrary />} />
            <SideBarItem
              title="Thống kê"
              to="/statistics"
              icon={<IoLibrary />}
            />
            <SideBarItem
              title="Quản lý khám bệnh"
              to="/medicalexamination"
              icon={<IoLibrary />}
            />
          </div>
        </div>

        <SideBarItem
          onClick={logout}
          title="Sign Out"
          to=""
          icon={<FaSignOutAlt />}
        />
      </div>
    </div>
  );
}
