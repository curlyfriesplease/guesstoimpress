export const YearContainer = ({year, children}) => (
    <div className="yearContainer dropShadow2">
    <p className="yearTitle">{year}</p>
        {children}
    </div>
)

export const ScoreLine = ({position, winner, children}) => {
    const showEmoji = (position) => {
        switch (position) {
            case "1": return "🥇";
            case "2": return "🥈";
            case "3": return "🥉";
            default: return "🏅";
        }   
    }

    const awardText = (position) => {
        switch (position) {
            case "1": return "1st PLACE";
            case "2": return "2nd PLACE";
            case "3": return "3rd PLACE";
            default: return `THE AWARD FOR ${position}`;
        }   
    }

    return (
        <div className="scoringLine">
            <div className="scoreLineIcon">
                {showEmoji(position)}
            </div>
            <div className="scoreLineText">
                <span><p className="andTheAwardGoesTo">{awardText(position)} goes to <div className="winnerName"> {winner}</div></p></span>
                <p>{children}</p>
            </div>
        </div>
    )
}

export const PredictionQuote = ({children}) => (
    <p className="predictionQuote">"{children}"</p>
)