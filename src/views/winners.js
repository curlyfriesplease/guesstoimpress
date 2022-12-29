import React from 'react';
import '../css/winners.css';
import '../App.css';
import { PredictionQuote, ScoreLine, YearContainer } from '../components/winners';

export const Winners = (setPredictions) => (
  <>
    <YearContainer year={"2022"}>
      <ScoreLine position="1" winner="TBC">
        TBC
      </ScoreLine>
      <ScoreLine position="2" winner="TBC">
        TBC
      </ScoreLine>
      <ScoreLine position="3" winner="TBC">
        TBC
      </ScoreLine>
      <ScoreLine position="MOST CREATIVE PREDICTION" winner="TBC">
        TBC
      </ScoreLine>
      <ScoreLine position="BEST ONE-YEAR-LATE PREDICTION" winner="TBC">
        TBC
      </ScoreLine>
    </YearContainer>
    <YearContainer year={"2021"}>
    <ScoreLine position="1" winner="CHERYLL">
      <PredictionQuote>a cure for alzheimers</PredictionQuote>
    Cheryll's excellent set took first place mainly from a partly correct prediction. A breakthrough in Alzheimer's treatment has brought us closer than ever to a cure. 
    <PredictionQuote>Kamala Harris first woman president</PredictionQuote>
    <PredictionQuote>A major volcano eruption affecting the climate</PredictionQuote>
    Kamala Harris' very brief presidency, and a volcano eruption, really secured the win. On 19th Nov, Kamala Harris becomes president for 85 minutes while Biden is placed under anaesthesia and temporarily steps down as president. La Palma saw a major volcanic eruption, though it's hard to assess its climate impact.
      </ScoreLine>
      <ScoreLine position="2" winner="THOM">
        <PredictionQuote>There's a ham shortage</PredictionQuote>
      Thom made a prediction that <a href="https://www.mashed.com/709285/what-you-need-to-know-about-the-christmas-2021-ham-shortage/">came true</a>, despite having been (at least partly) as a joke. I love it and humorous predictions that sometimes become real are the most fun part of having this competition. 
      <PredictionQuote>Lad baby is Christmas number one</PredictionQuote>
      <PredictionQuote>Boris Johnson gets ousted like the sick muthafucka he is</PredictionQuote>
      Sure enough Lad Baby were no.1 again, and Boris Johnson may have stayed but he certainly came damn close to getting ousted.
      </ScoreLine>
      <ScoreLine position="3" winner="DAN">
        <PredictionQuote>Trump starts his own TV network</PredictionQuote>
      Dan secured third place mainly because of his prediction about Trump starting a TV network. While it may not have been a TV network, he did announce and later launch a Twitter-like social network, Truth Social. 
      <PredictionQuote>Prince Philip</PredictionQuote>
      Dan also predicted the death of Prince Philip, however given his age there was nothing impressive about it as a prediction and it was not a factor in his win.
      </ScoreLine>
    </YearContainer>
  </>
);
