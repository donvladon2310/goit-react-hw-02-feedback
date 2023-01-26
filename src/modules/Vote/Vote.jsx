import { Component } from "react";

import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./VoteStatistics/Statistics";
import Section from "./Section/Section";



class Vote extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    }

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const good = this.state.good;
        const percent = ((good / total) * 100).toFixed(2);
        return Number(percent);
    }

    // increaseGoogVate = () => {
    //     this.setState(prevState => {
    //         return { good: prevState.good + 1 }
    //     })
    // }
    // increaseNeutralVate = () => {
    //     this.setState(prevState => {
    //         return { neutral: prevState.neutral + 1 }
    //     })
    // }
    // increaseBadVate = () => {
    //     this.setState(prevState => {
    //         return { bad: prevState.bad + 1 }
    //     })
    // }

    leaveVote = (name) => {
        this.setState(prevState => {
            return { [name]: prevState[name] + 1 }
        })
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const percent = this.countPositiveFeedbackPercentage();
        const key = Object.keys(this.state);
        return (
            <div>
                <h3>Please leave feedback </h3>
                <div>
                    <Section title="Variants">
                        <FeedbackOptions onLeaveFeedback={this.leaveVote} options={key} />
                    </Section>
                    <Section title="Results">
                        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percent} />
                    </Section>

                </div>
            </div>
        )
    }
}

export default Vote;