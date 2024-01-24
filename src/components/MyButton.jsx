const MyButton = ({ to, name }) => {
 
    return (
        <a href={`/${to}`}>
            <button className="my-button">
                 {name === '' ? "home" : name}
            </button>
        </a>
    )
}
 
export default MyButton;