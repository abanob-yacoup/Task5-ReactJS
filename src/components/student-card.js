import { Link } from "react-router-dom";

const Student = (props)=>{
    console.log("student",props)
    let {studentInfo} = props;
    
    return (
        <Link to={`/student/${studentInfo.id}`} className=" nav-link   alert alert-info" >
            <div>
            <p> <b className="h3"> Student Name:</b> {studentInfo.name}</p>
            <p> <b className="h3"> Student age:</b> {studentInfo.age}</p>
            <p> <b className="h3"> Student phone:</b> {studentInfo.phone}</p>
            </div>
        </Link>
    )
}

export default Student;