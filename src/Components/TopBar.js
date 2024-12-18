// TopBar.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function TopBar() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // 不改變路由，僅切換語言
  };

  return (
    <div className="TopBar">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zh')}>中文</button>
      <button onClick={() => changeLanguage('jp')}>日本語</button>
    </div>
  );
}

export default TopBar;
