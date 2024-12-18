import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';

function PB() {
  const { t } = useTranslation(); // 預設使用 translation namespace

  return (
    <div className="article-container">
      <h1>{t('valuationModels.pb.title')}</h1>
      <p>{t('valuationModels.pb.description')}</p>

      <h2>{t('valuationModels.pb.whyImportantHeading')}</h2>
      <ul>
        <li>
          <strong>{t('valuationModels.pb.lowPBIntro')}</strong>{' '}
          {t('valuationModels.pb.lowPBText')}
        </li>
        <li>
          <strong>{t('valuationModels.pb.highPBIntro')}</strong>{' '}
          {t('valuationModels.pb.highPBText')}
        </li>
      </ul>

      <h2>{t('valuationModels.pb.formulaHeading')}</h2>
      <p>{t('valuationModels.pb.formula1')}</p>
      <p>{t('valuationModels.pb.or')}</p>
      <p>{t('valuationModels.pb.formula2')}</p>

      <h2>{t('valuationModels.pb.exampleHeading')}</h2>
      <p>{t('valuationModels.pb.exampleIntro')}</p>
      <ul>
        <li>{t('valuationModels.pb.exampleList.price')}</li>
        <li>{t('valuationModels.pb.exampleList.bvps')}</li>
      </ul>
      <p>{t('valuationModels.pb.exampleCalculation')}</p>
      <p>{t('valuationModels.pb.exampleExplanation')}</p>

      <h2>{t('valuationModels.pb.limitationsHeading')}</h2>
      <ul>
        <li>{t('valuationModels.pb.limitationsList.assetHeavy')}</li>
        <li>{t('valuationModels.pb.limitationsList.bookValue')}</li>
        <li>{t('valuationModels.pb.limitationsList.comprehensive')}</li>
      </ul>
    </div>
  );
}

export default PB;
