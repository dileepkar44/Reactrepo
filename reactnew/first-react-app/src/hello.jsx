function Hello(){
    let message = 444;
    let myName = "Dileep"
    let fullName = () =>{
        return 'DIleep Krishna'
    }
    return <p> message : {message} hello this is feature speaking : {fullName()}</p>
}

export default Hello;