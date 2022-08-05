import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.scss";
import SideBarItem from "./sidebarItem";
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

export default function SideBar() {
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
    <div>
      <div className={styles.sidebar_pc}>
        <div style={{ width: "100%" }}>
          <img
            src={image}
            className={styles.sidebar_pc_profile_img}
            alt="profile"
          />

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
