import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
    // const seatNumbers = [1, 2, 7];
    const person = {
        name: "Volodyan",
        message: "Hi there!",
        emoji: "😄",
        seatNumbers: [1, 4, 7],
    };
    return (
        <div className="App">
            {/* <Hello person={person} /> */}
            {/* <Fruits /> */}
            {/* <ConditionalComponent /> */}
            {/* <Message /> */}
            {/* <Counter /> */}
            <Form />
        </div>
    );
}

export default App;
