export default  function Button({btnName,className}:{btnName:string,className:string}){
    return(
        <button className={className}>
            {btnName}
        </button>
    )
}