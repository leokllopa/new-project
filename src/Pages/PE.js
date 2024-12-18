import React from 'react';
import '../App.css'; // 引入樣式文件

function PE() {
  return (
    <div className="article-container">
      <h1>Price-to-Earnings (P/E) Ratio</h1>
      <p>
        The Price-to-Earnings (P/E) ratio is a commonly used valuation metric
        that compares a company's share price to its earnings per share (EPS).
        It provides insights into how much investors are willing to pay for each
        dollar of earnings.
      </p>
      <h2>Interpretation</h2>
      <p>
        A high P/E ratio may indicate that a stock is overvalued or that
        investors expect high growth rates in the future. Conversely, a low P/E
        ratio could suggest that a stock is undervalued or that the company is
        experiencing challenges.
      </p>
      <h2>Formula</h2>
      <p>The formula for P/E ratio is:</p>
      <pre>P/E Ratio = Share Price / Earnings Per Share (EPS)</pre>

      <h2>Example</h2>
      <p>
        If a company's share price is $100 and its EPS is $5, the P/E ratio
        would be:
      </p>
      <pre>P/E Ratio = 100 / 5 = 20</pre>
      <p>
        This means investors are willing to pay $20 for every $1 of the
        company's earnings.
      </p>
    </div>
  );
}

export default PE;
