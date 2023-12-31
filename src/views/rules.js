import React from 'react';
import '../css/rules.css';
import '../App.css';
import { YearContainer } from '../components/winners';

export const Rules = () => (
  <>
    <YearContainer year={'2024'}>
      <p className="addedRule">
        Added: To keep things interesting, rule added to limit boring guesses
      </p>
      <p className="addedRule">
        Added: Deadline extended to Jan 4th, to allow for hangovers and
        dilly-dallyers
      </p>
      <p className="addedRule">
        Added: No celeb death guesses for anyone known to be ill
      </p>
      <p className="addedRule">
        Added: Celeb death max age lowered from 85 to 80
      </p>
      <p className="removedRule">
        Removed: Political guess no longer essential
      </p>
      <ol className="annualRulesList">
        <li>
          Up to <u>eight</u> predictions in total
        </li>
        <li>
          No boring as shit guesses. A non-player, the Boringness Ombudsman,
          will be chosen and asked to read through all guesses at the start of
          the year. Anything deemed to be dull will be removed. Get outta my
          sight
        </li>
        <li>Any celebrity deaths must be aged under 80 when the year begins</li>
        <li>Any celebrity deaths must not be for anyone known to be ill</li>
        <li>
          No predictions within your control, e.g. "I will run a marathon this
          year"
        </li>
        <li>
          Most impressive individual prediction, that is at least partly
          correct, wins a prize
        </li>
        <li>Wildest set of predictions will win a prize</li>
        <li>Most creative set of predictions will win a prize</li>
        <li>
          Prizes: Best individual prediction wins 3 books, chosen by the
          previous year's winners. Wildest set of predictions, and most
          creative, get a pint. Or more than that if it's close to payday when I
          see you.
        </li>
        <li>Predictions must be submitted by the end of Jan 4th</li>
      </ol>
    </YearContainer>
    <YearContainer year={'2023'}>
      <p className="removedRule">
        Removed: Celebrity death being essential. Still strongly encouraged but
        no longer essential
      </p>
      <ol className="annualRulesList">
        <li>
          Up to <u>eight</u> predictions in total
        </li>
        <li>Any celebrity deaths must be aged under 85 when the year begins</li>
        <li>At least one political prediction</li>
        <li>
          No predictions within your control, e.g. "I will run a marathon this
          year"
        </li>
        <li>Wildest set of predictions will win a prize</li>
        <li>Most creative set of predictions will win a prize</li>
        <li>
          Most impressive individual prediction, that is at least partly
          correct, wins a prize
        </li>
        <li>
          Prizes: Best individual prediction wins 3 books, chosen by the
          previous year's winners. Wildest set of predictions, and most
          creative, get a pint. Or more than that if it's close to payday when I
          see you.
        </li>
        <li>Predictions must be submitted by the end of Jan 1st</li>
      </ol>
    </YearContainer>
    <YearContainer year={'2022'}>
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
        Removed: Deciding what the prizes are before the year starts. Seemed
        like a good idea at the time to say there was a polaroid camera at the
        other end. But when the time came around, my wallet said baby please no
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
        <li>Most creative set of predictions will win a prize</li>
        <li>
          Most impressive individual prediction, that is at least partly
          correct, wins a prize
        </li>
        <li>
          Prizes: Best individual prediction wins 3 books, chosen by the
          previous year's winners. Wildest set of predictions, and most
          creative, get a pint. Or more than that if it's close to payday when I
          see you.
        </li>
        <li>Predictions must be submitted by the end of Jan 1st</li>
      </ol>
    </YearContainer>
    <YearContainer year={'2021'}>
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
