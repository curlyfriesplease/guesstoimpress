import React from "react";
import "../css/rules.css";
import "../App.css";
import {
  YearContainer,
} from "../components/winners";

export const Rules = () => (
  <>
    <YearContainer year={"2023"}>
      <p className="removedRule">
        Removed: Celebrity death being essential. Still strongly encouraged but
        no longer essential
      </p>
      <ol className="annualRulesList">
      <li>
          Up to <u>eight</u> predictions in total
        </li>
        <li>
          Any celebrity deaths must be aged under 85 when the year begins
        </li>
        <li>At least one political prediction</li>
        <li>
          No predictions within your control, e.g. "I will run a marathon this
          year"
        </li>
        <li>Wildest set of predictions will win a prize</li>
        <li>
          Most impressive individual prediction, that is at least partly
          correct, wins a prize
        </li>
        <li>
          Prizes to be determined at the end of the year. Depends what I can afford!
        </li>
        <li>
          Predictions must be submitted by the end of Jan 1st
        </li>
      </ol>
    </YearContainer>
    <YearContainer year={"2022"}>
      <p className="addedRule">
        Added: An additional three guesses, up to eight total, to attract more
        wild and unusual predictions
      </p>
      <p className="addedRule">
        Added: An age limit to the death prediction, as too many people in their
        90s were being guessed
      </p>
      <p className="addedRule">
        Added: A rule that it must be something out of your control
      </p>
      <p className="removedRule">
        Removed: Deciding what the prizes are before the year starts. Seemed like a good idea at the time to say there was a polaroid camera at the other end. But when the time came around, my wallet said baby please no 
      </p>
      <ol className="annualRulesList">
        <li>
          Up to <u>eight</u> predictions in total
        </li>
        <li>
          At least one celebrity death, aged under 85 when the year begins
        </li>
        <li>At least one political prediction</li>
        <li>
          No predictions within your control, e.g. "I will run a marathon this
          year"
        </li>
        <li>Wildest set of predictions will win a prize</li>
        <li>
          Most impressive individual prediction, that is at least partly
          correct, wins a prize
        </li>
        <li>
          Prizes to be determined at the end of the year depending on whether I've saved any money or not. Probably not. So just a pint each most likely.
        </li>
        <li>
          Predictions must be submitted by the end of Jan 1st
        </li>
      </ol>
    </YearContainer>
    <YearContainer year={"2021"}>
      <ol className="annualRulesList">
        <li>
          Up to <u>five</u> predictions in total
        </li>
        <li>At least one celebrity death, no age restriction</li>
        <li>At least one political prediction</li>
        <li>Most impressive set of predictions wins a polaroid camera</li>
      </ol>
    </YearContainer>
  </>
);
