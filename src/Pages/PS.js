import React from 'react';
import '../App.css'; // 引入樣式文件

function ps() {
  return (
    <div className="article-container">
      <h1>P/S Ratio (Price-to-Sales Ratio)</h1>

      <p>
        The P/S ratio compares the price of a company’s stock to its revenue
        (sales). It’s often used for companies that don’t have profits yet, such
        as startups or tech companies.
      </p>
      <h2>Interpretation:</h2>
      <p>
        If another company in the same industry has a P/S ratio of 5, XYZ Corp.
        might be undervalued. However, higher P/S ratios are common for
        companies with strong growth potential. Same concept Just like P/E
        ratio.
      </p>
      <h2>Formula:</h2>
      <p>P/S Ratio = Stock Price ÷ Sales Per Share</p>
      <p>OR</p>
      <p>P/S Ratio = Market Value of the Company ÷ Total Revenue</p>

      <h2>Why is it important?</h2>
      <ul>
        <li>A low P/S ratio might indicate the stock is undervalued.</li>
        <li>
          A high P/S ratio could mean the stock is expensive, or investors
          expect strong future growth.
        </li>
      </ul>

      <h2>Example:</h2>
      <p>Imagine XYZ Corp.:</p>
      <ul>
        <li>The company generates $10 million in annual sales.</li>
        <li>Its market value is $30 million.</li>
      </ul>
      <p>P/S Ratio = $30 million ÷ $10 million = 3</p>
      <p>
        This means investors are paying $3 for every $1 of the company’s sales.
      </p>
    </div>
  );
}

export default ps;
