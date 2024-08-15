function Hello(props) {
    console.log(props);
    return (
        <div>
            <h1>
                Hello {props.name} from a Hello component! {props.message}
            </h1>
        </div>
    );
}

export default Hello;
