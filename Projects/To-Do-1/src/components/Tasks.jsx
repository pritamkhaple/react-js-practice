function Tasks(){

    let taskName = "Buy Milk";
    let taskDate = "01/01/2023"
    let taskName1 = "Buy Nothing or go home";
    let taskDate1 = "02/01/2023"

    return(
        <div class="container text-center">
        
        <div class="row">
          <div class="col-sm-6">
            <h3>{taskName}</h3>
          </div>
          <div class="col-sm-4">
            <h3>{taskDate}</h3>
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <h3>{taskName1}</h3>
          </div>
          <div class="col-sm-4">
            <h3>{taskDate1}</h3>
          </div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        </div>
    )
}

export default Tasks;