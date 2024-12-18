import React from 'react';
import '../App.css'; // 引入你的樣式
import { useTranslation } from 'react-i18next'; // 引入翻譯功能

function Home() {
  const { t } = useTranslation(); // 使用 useTranslation 來加載翻譯內容

  return (
    <div className="article-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>{t('home.welcome')}</h1>
        <p>{t('home.intro')}</p>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>{t('home.about.title')}</h2>
        <p>{t('home.about.residing')}</p>
        <p>{t('home.about.currentRole')}</p>
        <p>{t('home.about.languages')}</p>
        <p>{t('home.about.experience')}</p>
        <p>{t('home.about.inspiration')}</p>
      </section>
    </div>
  );
}

export default Home;
