// Sidebar.js
import React, { useState } from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Sidebar() {
  const { t } = useTranslation('sidebar');
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((item, key) => {
          if (item.subMenu) {
            return (
              <li key={key} className="menu-item">
                <div className="menu-title">
                  <Link to={item.link}>{t(item.titleKey)}</Link>
                  <span
                    className="arrow-icon"
                    onClick={() => toggleMenu(item.titleKey)}
                  >
                    {expandedMenus[item.titleKey] ? '▲' : '▼'}
                  </span>
                </div>
                {expandedMenus[item.titleKey] && (
                  <ul className="sub-menu">
                    {item.subMenu.map((subItem, subKey) => (
                      <li key={subKey}>
                        <Link to={subItem.link}>{t(subItem.titleKey)}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          } else {
            return (
              <li key={key}>
                <Link to={item.link}>{t(item.titleKey)}</Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
