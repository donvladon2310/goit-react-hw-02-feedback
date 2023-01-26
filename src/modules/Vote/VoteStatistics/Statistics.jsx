const Statistics = ({ good, neutral, bad, total, percent }) => {
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral} </p>
            <p>Bad: {bad} </p>
            <p>Total: {total}</p>
            <p>Pozitive: {percent}%</p>
        </>


    )
}

export default Statistics;