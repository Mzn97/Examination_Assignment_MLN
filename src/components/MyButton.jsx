const MyButton = ({ to, name }) => {
 
    return (
        <a href={`/${to}`}>
            <button className="my-button">
                Take me to {name === '' ? "home" : name}
            </button>
        </a>
    )
}
 
export default MyButton;