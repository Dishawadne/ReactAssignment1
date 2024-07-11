const First= () =>
{
    return(
        <h1>First Function Component</h1>
    )
}

const Second= ({name}) =>
{
    return(
        <h1> hello {name}</h1>
    )
}

const Third =(Props) =>
{
    return(
        <div>
        <h1> my name is {Props.name} <br></br>
            I stay at {Props.address}
        </h1>
        </div>
    )
}


const Fourth =(Props) =>
{
    return(
        <div>
             <h1>I am a {Props.dept} Student.</h1>
        </div> 
       
    )
}


export default First;
export {Second,Third,Fourth};
