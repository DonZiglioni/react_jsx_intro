const Tweet = (props) => {
    return (
        <div class="tweet-box">
            <h3>{props.username}</h3>
            <div class="info">
                <span><i>- {props.name}</i></span>
                <span><i>{props.date}</i></span>
            </div>
            <p>{props.tweet}</p>
        </div>
    )
}

const App = () => {
    let date = new Date()
    let month = date.getMonth()
    let day = date.getDay()
    let year = date.getFullYear()


    return (
        <div>
            <Tweet
                username="Don Ziglioni"
                name="Frank A."
                date={`${month}/${day}/${year}`}
                tweet="My first Tweet!"
            />
            <Tweet
                username={"Maggie Moo"}
                name="Maggie M."
                date={`${month}/${day}/${year}`}
                tweet="The taste of my ice cream is moooosic in your mouth!"
            />
            <Tweet
                username="GetFrozted99"
                name="Little Debbie"
                date={`${month}/${day}/${year}`}
                tweet="Chocolate doughnuts are the key to success...    
                Be sure to eat them all before they are GONE!!"
            />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))