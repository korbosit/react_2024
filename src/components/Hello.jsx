function Hello(props) {
    // props.name = "Irina"; will be a mistake
    return (
        <div>
            <h1>
                Hello {props.name} from a Hello component! {props.message}{" "}
                {props.emoji}
            </h1>
        </div>
    );
}

export default Hello;
