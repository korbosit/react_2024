import { useState } from "react";

export default function Form() {
    const [name, setName] = useState({ firstName: "", lastName: "" });
    // function handleChange(e) {
    //     // console.log(e.target.value);
    //     setName(e.target.value);
    // }
    return (
        <div>
            {name.firstName} - {name.lastName}
            <form>
                <input
                    onChange={(e) => {
                        setName({ ...name, firstName: e.target.value });
                    }}
                    type="text"
                    value={name.firstName}
                />
                <input
                    onChange={(e) => {
                        setName({ ...name, lastName: e.target.value });
                    }}
                    type="text"
                    value={name.lastName}
                />
            </form>
        </div>
    );
}
