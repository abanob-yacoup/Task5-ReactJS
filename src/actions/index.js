
const baseURL = "http://localhost:3001"
const requestOptions = {
    method: 'GET',
}

export const getAllStudents =async () =>{
    console.log('inside reducer get All Students')
        let payload;
    try{
        let res = await fetch(`${baseURL}/students`,requestOptions)
         payload = await res.json();
       
    }catch(err){
        console.log(err)
    }
    console.log("response",{type:'STUDENT_LIST',payload})
    return  {type:'STUDENT_LIST',payload}
}
export const addNewStudent = async(student)=>{
    postOptions.body =JSON.stringify(student)
    let payload;
    try{
        let res = await fetch(`${baseURL}/students`,postOptions)
        payload = await res.json();
    }catch(err){
        console.log(err)
    }
    console.log("response",{type:'NEW_STUDENT',payload})
    return {type:'NEW_STUDENT',payload}
}

export const getStudentById = async (id)=>{

    let payload;
    try{
        let res = await fetch(`${baseURL}/students/${id}`)
        payload = await res.json();
    }catch(err){
        console.log(err)
    }

    console.log("response",{type:'STUDENT',payload})
    return {type:'STUDENT',payload};
}

export const deleteStudentById = async(id)=>{
    let payload;
    try{
        let res = await fetch(`${baseURL}/students/${id}`,requestDeleteOptions)
        payload = await res.json();
    }catch(err){
        console.log(err)
    }
    console.log("response",{type:'DELETED_STUDENT',payload})
    return {type:'DELETED_STUDENT',payload}
}

export const clearStudentState = async ()=>{

    console.log("response",{type:'CLEAR_STATE',payload:null})
    return {type:'CLEAR_STATE',payload:null};
}

const postOptions = {
    method: 'POST',
    body: JSON.stringify({
        name: "foo",
        age: 30,
    }),
    headers: {
        'Content-Type': 'application/json'
    }
}
const requestDeleteOptions = {
    method: 'DELETE',
}

