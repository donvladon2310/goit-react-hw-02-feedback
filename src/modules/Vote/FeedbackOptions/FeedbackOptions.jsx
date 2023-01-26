import Button from "../VoteStatistics/Button";


const FeedbackOptions = ({ leaveVote }) => {
    return (
        <>
            <Button onClick={() => leaveVote("good")} type="button">Good</Button>
            <Button onClick={() => leaveVote("neutral")} type="button">Neutral</Button>
            <Button onClick={() => leaveVote("bad")} type="button">Bad</Button>

        </>

    )
}

export default FeedbackOptions;