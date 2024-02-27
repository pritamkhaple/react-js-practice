let CurrentTime= () =>{

    let time =  new Date();

    return <p className="fw-bold">Well the Current Date & Time is {time.toLocaleString()}</p>;
}


export default CurrentTime;