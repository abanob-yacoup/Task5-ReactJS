const Search = ({onSearch})=>{
    const filtering =(e)=> {
        onSearch(e.target.value);
    }
    return (
        <form>
        <div className="form-group text-center my-3">
            <input className="form-control " id="filter" onChange={filtering} placeholder="Search for a student by name"/>
        </div>
        </form>
    )
}

export default Search;