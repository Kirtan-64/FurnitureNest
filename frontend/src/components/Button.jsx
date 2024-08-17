const Button = ({prop, text}) => {
    return (
        <a href="#" class={"m-2 inline-flex items-center justify-center rounded-xl border border-transparent  px-5 py-3 font-medium text-white hover:bg-blue-700" + prop}> {text} </a>
    )
}

export default Button;