import Fruit from "./Fruit";

function Fruits() {
    // const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
    const fruits = [
        {
            name: "Apple",
            price: 10,
            emoji: "🍎",
            soldout: false,
        },
        {
            name: "Mango",
            price: 7,
            emoji: "🥭",
            soldout: false,
        },
        {
            name: "Banana",
            price: 5,
            emoji: "🍌",
            soldout: true,
        },
        {
            name: "Orange",
            price: 2,
            emoji: "🍊",
            soldout: false,
        },
        {
            name: "Pineapple",
            price: 8,
            emoji: "🍍",
            soldout: true,
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
                        soldout={fruit.soldout}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Fruits;
