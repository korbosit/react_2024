import Fruit from "./Fruit";

function Fruits() {
    // const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
    const fruits = [
        {
            name: "Apple",
            price: 10,
            emoji: "🍎",
        },
        {
            name: "Mango",
            price: 7,
            emoji: "🥭",
        },
        {
            name: "Banana",
            price: 5,
            emoji: "🍌",
        },
        {
            name: "Orange",
            price: 2,
            emoji: "🍊",
        },
        {
            name: "Pineapple",
            price: 8,
            emoji: "🍍",
        },
    ];
    return (
        // <ul>
        //     {/* <div>
        //         {fruits.map((fruit) => (
        //             <li key={fruit}>{fruit}</li>
        //         ))}
        //     </div> */}
        //     {/* <div>
        //         {fruits.map((fruit) => (
        //             <li key={fruit.name}>
        //                 {fruit.emoji} {fruit.name} ${fruit.price}
        //             </li>
        //         ))}
        //     </div> */}
        // </ul>

        <div>
            <ul>
                {fruits.map((fruit) => (
                    <Fruit
                        key={fruit.name}
                        name={fruit.name}
                        price={fruit.price}
                        emoji={fruit.emoji}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Fruits;
