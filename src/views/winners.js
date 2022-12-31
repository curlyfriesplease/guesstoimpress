import React from 'react';
import '../css/winners.css';
import '../App.css';
import { AcceptanceSpeech, PredictionQuote, ScoreLine, YearContainer } from '../components/winners';

export const Winners = () => (
  <>
    <YearContainer year={"2022"}>
      <ScoreLine position="1" winner="PAUL D">
        <PredictionQuote>There will be 3 prime ministers inc Boris Johnson.</PredictionQuote>
        There was no doubt from the judges, Paul D was the clear winner with this excellent guess. I think we'd all suspected 2022 might see a new PM, but to go further and say there would be three is a great shout.
        <AcceptanceSpeech>I'd like to thank the Tory party for an entertaining year</AcceptanceSpeech>
      </ScoreLine>
      <ScoreLine position="2" winner="CURTIS">
        <PredictionQuote>The average household annual energy bill tops 2k</PredictionQuote>
        Curtis' whole set did well, with 4 correct. But this was the standout prediction. Even before the Ukraine conflict had started, he had carefully thought forward to knock on effects for when it would begin. A logical and smart move.
      </ScoreLine>
      <ScoreLine position="3" winner="ALAN">
        <PredictionQuote>The Tory leadership race hots up with Priti, Rishi and Liz in contention, in the end Liz Truss wins the competition and takes home a speedboat.</PredictionQuote>
        Another UK political guess makes the top 3 - Alan's very nice guess that there would be a leadership race with Liz Truss ultimately beating Rishi. Taking home a proverbial speedboat in the form of the nuclear launch code briefcase.
        <AcceptanceSpeech>I would like to thank my agent, my teachers at school (especially my swimming coach) and most of all my wife who suggested Liz. I wish that rather than the speedboat I had mentioned the £115k a year pension- a fine reward for tanking the economy in 49 days.</AcceptanceSpeech>
      </ScoreLine>
      <ScoreLine position="MOST CREATIVE PREDICTION" winner="ADAM N">
        Adam N came up with some absolutely batshit guesses, which <a href="https://predictions.jonmulhern.co.uk/query/year=2022authors=ADAM+N">can be read here.</a> Amongst them all, one came through which was genuinely impressive, regarding a high profile football pundit being sacked.
      </ScoreLine>
      <ScoreLine position="WILDEST OVERALL PREDICTION SET" winner="STAS">
        Stas spread his bets across many areas, and with only wild outcomes, which is very much in the spirit of the game. Eight guesses, all in different categories, all creative. A great set that's undeniably wild. <a href="https://predictions.jonmulhern.co.uk/query/year=2022authors=STAS">They can be read here.</a>
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
