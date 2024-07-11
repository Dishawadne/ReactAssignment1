export function Button(){

    const sayHi=() =>{
        alert("Hii");
    }

    const sayBy=()=>{
        alert("By");
    }
    return(
        <>
        <button onClick={sayHi}> say Hi</button>
        <button onClick={sayBy}> say By</button>
        </>
    )
}