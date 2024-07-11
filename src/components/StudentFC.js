function Student(props){
    return( 
        <div>
      <h2>Student Information</h2>
       <h1>Name: {props.name}</h1>
      <h1>Address: {props.address}</h1>
      <h1>Scores: {props.scores}</h1> 
    </div>
      
    )

   
}

export default Student;