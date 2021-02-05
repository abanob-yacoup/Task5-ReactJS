import React, { useEffect } from 'react';
import {getStudentById,deleteStudentById,clearStudentState} from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
const StudentDetails = (props)=>{
    let {history,match,studentInfo,getStudentById,deleteStudentById,deletedStudent,clearStudentState} = props
    console.log('props',props)

    useEffect(()=>{
        getStudentById(match.params.id)
        if(deletedStudent){
            history.push('/')
        } 
        return ()=>{
            clearStudentState()
        }
        // eslint-disable-next-line
    },[deletedStudent])

    const deleteStudent = ()=>{
        deleteStudentById(studentInfo.id)

    }
    if(studentInfo){
    return (
        <div className="alert">
        <div className="alert alert-info">
        <p> <b className="h3"> Student Name:</b> {studentInfo.name}</p>
            <p> <b className="h3"> Student age:</b> {studentInfo.age}</p>
            <p> <b className="h3"> Student phone:</b> {studentInfo.phone}</p>
            <button className='btn btn-warning my-1' onClick={deleteStudent}>delete</button>
            </div>
        </div>
    )}else return (<h1> </h1>)
}

const mapDispatchToProps=(dispatch)=>{
    console.log('insdie map dispatch to Prps')
    let ret =bindActionCreators({getStudentById,deleteStudentById,clearStudentState},dispatch)
    console.log(ret)
    console.log(getStudentById)
    return  ret
  }
  
  const mapStateToProps = (state) => {
    console.log("inside map state to props: ",state)
    return {
        deletedStudent: state.studentReducer.deletedstudent,
        studentInfo: state.studentReducer.student
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(StudentDetails);

