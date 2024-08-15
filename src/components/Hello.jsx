function Hello({ name, message, emoji }) {
    // console.log(props);
    // const { name, message } = props;
    return (
        <div>
            <h1>
                Hello {name} from a Hello component! {message} {emoji}
            </h1>
        </div>
    );
}

export default Hello;
