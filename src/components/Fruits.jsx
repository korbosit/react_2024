function Fruits() {
    const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
    return (
        <ul>
            <div>
                {fruits.map((fruit) => (
                    <li key={fruit}>{fruit}</li>
                ))}
            </div>
        </ul>
    );
}

export default Fruits;
