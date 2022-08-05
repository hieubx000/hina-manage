import React from 'react'
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import styles from './SideBarItem.module.scss'

export default function SideBarItem({ title, to, icon, onClick }) {
    const location = useLocation();
    const isActive = location.pathname === to;
    const btnClass = isActive ? styles.body_active : styles.body;
    return (
        <Link to={to}>
            <div onClick={onClick} className={btnClass}>
                <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
                    {icon}
                    <p className={styles.title}>{title}</p>
                </IconContext.Provider>
            </div>
        </Link>
    )
}
