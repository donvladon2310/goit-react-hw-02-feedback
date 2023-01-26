import Button from "../VoteStatistics/Button";


const FeedbackOptions = ({ leaveVote }) => {
    return (
        <>
            <Button onClick={(e) => leaveVote("good")} type="button">Good</Button>
            <Button onClick={(e) => leaveVote("neutral")} type="button">Neutral</Button>
            <Button onClick={(e) => leaveVote("bad")} type="button">Bad</Button>

        </>

    )
}

export default FeedbackOptions;