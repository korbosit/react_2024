import Hello from "./components/Hello";

function App() {
    return (
        <div className="App">
            <Hello name="Volodya" message="Hi there!" emoji="😄" />
            <Hello name="Timka" message="I love you!" emoji="🙂" />
            <Hello name="Alfa" message="You are the best dog!" emoji="😅" />
        </div>
    );
}

export default App;
