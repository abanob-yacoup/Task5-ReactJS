import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {addNewStudent} from '../actions'
const AddStudent = (props) => {
  let {className,addClickState,addNewStudent}= props
  console.log('inside add student component:')
  let history = useHistory();
  const [modal, setModal] = useState(false);
  const toggle = () =>{
    setModal(!modal);
    addClickState=false;
  } 

  useEffect(() => {
    console.log("mount and Update",addClickState)
    if(addClickState)toggle();
    return () => {
    console.log("unmount",addClickState)
    }
    // eslint-disable-next-line
  }, [addClickState])
  
   let [name,setName]= useState({value:'',class:'',pattern:/^\D{5,}$/gim});
   let [age,setAge]= useState({value:'',class:''});
   let [phone,setPhone]= useState({value:'',class:'',pattern:/^0\d{10}$/gim});
   let [isDisabled,setIsDisabled]= useState(true);

  const addStudent = ()=>{
    let student = {name:name.value,age:age.value,phone:phone.value}
    addNewStudent(student);
    history.push("/");
    toggle();
 
  }

  const updateName=(e)=>{
    console.log(e.target.value)
    if((name.pattern.test(e.target.value))){
      console.log('inside if:')
      setName({value:e.target.value,class:'is-valid',pattern:/^\D{5,}$/gim}); 
      // eslint-disable-next-line
      if(age.class ==="is-valid"&&phone.class=="is-valid")
      setIsDisabled(false)
    }else {
      console.log('inside else:')
      setName({value:e.target.value,class:'is-invalid',pattern:/^\D{5,}$/gim}); 
      setIsDisabled(true)

    }
  }
  const updateAge=(e)=>{
    if((e.target.value<=26 && e.target.value>=18)){
      console.log('inside if:')
      setAge({value:e.target.value,class:'is-valid'}); 
      // eslint-disable-next-line
      if(name.class ==="is-valid" &&phone.class=="is-valid")
      setIsDisabled(false)

    }else {
      console.log('inside else:')
      setAge({value:e.target.value,class:'is-invalid'}); 
      setIsDisabled(true)
      

    }
  }

  const updatePhone=(e)=>{
    if((phone.pattern.test(e.target.value))){
      console.log('inside if:')
      setPhone({value:e.target.value,class:'is-valid',pattern:/^0\d{10}$/gim}); 
      // eslint-disable-next-line
      if(name.class ==="is-valid" && age.class=="is-valid")
      setIsDisabled(false)

    }else {
      console.log('inside else:')
      setPhone({value:e.target.value,class:'is-invalid',pattern:/^0\d{10}$/gim}); 
      setIsDisabled(true)

    }
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}backdrop="false"  className={className}>
        <ModalHeader toggle={toggle}>Add New Student</ModalHeader>
        <ModalBody className="w-75 mx-auto">
          <div className="form-group">
            <label>Enter Student Name</label>
            <input  value={name.value} onChange={updateName} className={`form-control ${name.class}`} placeholder="at least 5 char" />
          </div>
          <div className="form-group ">
          <label>Enter Student Name</label>
            <input value={age.value}  onChange={updateAge} className={`form-control ${age.class}`} placeholder=" betwwen 18 and 26" />
          </div>
          <div className="form-group ">
          <label>Enter Student Name</label>
            <input value={phone.value} onChange={updatePhone} className={`form-control ${phone.class}`} placeholder="must begin with 0 and 11 number" />
          </div>
        </ModalBody>
        <ModalFooter className="justify-content-start">
          <Button color="primary" disabled={isDisabled}  onClick={addStudent}>Add</Button>
          <Button className="ml-auto" color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const  mapDispatchToProps=(dispatch)=>{

  return bindActionCreators({addNewStudent},dispatch)

}

export default connect(null,mapDispatchToProps)(AddStudent) ;
