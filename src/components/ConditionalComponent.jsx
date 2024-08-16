import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent() {
    let messageOne;
    let messageOTwo;
    let message;
    const display = false;
    if (display) {
        message = <h1>This is message 1</h1>;
    } else {
        message = <h1>This is message 2</h1>;
    }
    return message;
}
