const Person = (props) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {props.name.length > 8 ? props.name.slice(0, 6) : props.name}</p>
            <p>Age: {props.age}</p>
            <p>{props.age > 18 ? "Please go vote!" : "You must be 18"}</p>
            <p>Hobbies: {props.hobbies.map(item => <li>{item}</li>)}</p>
        </div>

    )
}

const App = () => {
    return (
        <div>
            <Person name="Phil Mauro" age="16" hobbies={["Songwriting", "Cooking", "Eating Candy"]} />
            <Person name="Ariana Grande" age="33" hobbies={["Singing", "Dancing", "Eating Cake"]} />
            <Person name="Elton John" age="21" hobbies={["Playing Piano", "Writing", "Eating Cookies"]} />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))