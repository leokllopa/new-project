import React from 'react';
import '../App.css';

function DCF() {
  return (
    <div className="article-container">
      <h1>What is Discounted Cash Flow (DCF)?</h1>
      <p>
        The <strong>Discounted Cash Flow (DCF)</strong> model helps investors
        figure out what a company is worth today based on its future cash flows.
        Think of it like asking, "How much should I pay now to get money in the
        future?"
      </p>

      <h3>Why Do We Use DCF?</h3>
      <p>
        When investing, it's important to know if you're paying a fair price for
        a stock. The DCF model gives you an estimate of a company’s “true
        value,” or intrinsic value. This way, you can decide:
      </p>
      <ul>
        <li>
          Is the stock underpriced? If yes, it might be a good investment.
        </li>
        <li>Is the stock overpriced? If yes, you might want to avoid it.</li>
      </ul>

      <h3>How Does DCF Work?</h3>
      <p>
        DCF looks at a company's future cash flows (the money it’s expected to
        earn) and calculates how much those cash flows are worth today. This is
        done by using a “discount rate,” which adjusts for the time value of
        money.
      </p>
      <p>Here’s the basic idea:</p>
      <p>
        <strong>DCF Formula:</strong>
        <br />
        Present Value = Future Cash Flow ÷ (1 + Discount Rate)ⁿ
      </p>
      <p>
        <strong>For Example:</strong> Imagine a company will make $100 in one
        year, and the discount rate is 10%. The present value of that $100 is:
        <br />
        $100 ÷ (1 + 0.1) = $90.91
      </p>
      <p>
        This means $100 earned in the future is worth $90.91 today because money
        loses value over time.
      </p>

      <h3>Why is DCF Important?</h3>
      <p>DCF helps you answer two key questions:</p>
      <ul>
        <li>
          <strong>What is this company really worth?</strong> It gives you an
          idea of its intrinsic value.
        </li>
        <li>
          <strong>Am I overpaying?</strong> If the stock price is higher than
          the DCF value, it may be overpriced.
        </li>
      </ul>

      <h3>When Should You Use DCF?</h3>
      <p>
        DCF works best for companies with steady, predictable earnings, like
        established businesses. For newer companies or those with unstable
        earnings, DCF might not be as accurate because future cash flows are
        harder to estimate.
      </p>

      <h1>DCF Example: Lottery Payout</h1>
      <p>
        Imagine you win the lottery, and you have two options for receiving your
        prize:
      </p>
      <ol>
        <li>Take $1,000,000 today as a lump sum.</li>
        <li>Receive $100,000 every year for the next 15 years.</li>
      </ol>
      <p>
        Which option should you choose? This is where the{' '}
        <strong>Discounted Cash Flow (DCF)</strong>
        model can help. It calculates the present value of the future payments
        to see if they are worth more or less than taking the money now.
      </p>

      <h3>Step 1: Understand the Cash Flows</h3>
      <p>
        - Option 1: $1,000,000 today (lump sum).
        <br />- Option 2: $100,000 each year for 15 years.
      </p>

      <h3>Step 2: Choose a Discount Rate</h3>
      <p>
        The discount rate represents the time value of money and potential
        investment returns. Let’s use a discount rate of <strong>5%</strong>.
      </p>

      <h3>Step 3: Calculate the Present Value</h3>
      <p>
        Using the DCF formula for each year, we calculate the present value (PV)
        of each $100,000 payment in Option 2.
      </p>
      <p>
        <strong>DCF Formula:</strong>
      </p>
      <p>
        PV = Future Cash Flow ÷ (1 + Discount Rate)ⁿ
        <br />
        Example for Year 1: $100,000 ÷ (1 + 0.05)¹ = $95,238
        <br />
        Example for Year 2: $100,000 ÷ (1 + 0.05)² = $90,702
        <br />
        ...
      </p>
      <p>
        After summing up the PV for all 15 years, let’s say the total comes to
        around
        <strong>$1,150,000</strong>.
      </p>

      <h3>Step 4: Compare the Options</h3>
      <p>
        - Option 1: $1,000,000 today.
        <br />- Option 2: $1,150,000 (present value of 15 yearly payments).
      </p>

      <h3>Final Thought</h3>
      <p>
        Since $1,150,000 is greater than $1,000,000, taking the payments over 15
        years appears to be the better financial decision.
      </p>
      <p>
        Even if the DCF calculation shows that taking periodic payments is
        financially better, this doesn’t always mean it’s the best choice. For
        example, if you have a terminal illness and only a year to live, does it
        make sense to take payments over 15 years? Or what if the company or
        government making the payments is likely to go bankrupt in the future?
      </p>
      <p>
        DCF is a useful tool for financial decisions, but life circumstances and
        risks should always be considered alongside the numbers.
      </p>

      <h1>The discount rate</h1>
      <p>
        The discount rate is used to calculate the present value of future cash
        flows. It represents the "cost" of waiting or the risk associated with
        future payments. While often linked to interest rates or inflation, it
        can vary based on the scenario.
      </p>
      <ul>
        <li>
          <strong>Inflation Rate:</strong> Adjusting for the decreasing
          purchasing power of money over time.
        </li>
        <li>
          <strong>Growth Rate:</strong> For businesses, this could be the
          expected growth rate of a company or industry.
        </li>
        <li>
          <strong>Opportunity Cost:</strong> The return you could have earned
          from an alternative investment.
        </li>
        <li>
          <strong>Risk-Free Rate:</strong> The theoretical return on an
          investment with zero risk, such as government bonds.
        </li>
        <li>
          <strong>Market Risk Premium:</strong> The additional return investors
          expect for taking on market risk.
        </li>
        <li>
          <strong>Personal Discounting:</strong> For personal decisions, it
          might include subjective factors like urgency (e.g., needing money
          sooner rather than later).
        </li>
      </ul>
      <p>
        The discount rate is not one-size-fits-all—it should reflect the risks,
        opportunities, and priorities of the specific decision. For instance, if
        you're analyzing a lottery payout, your discount rate might consider
        inflation, investment opportunities, and even your health or personal
        goals.
      </p>
    </div>
  );
}

export default DCF;
