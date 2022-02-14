function SearchBar({search, setSearch, searchTags, setSearchTags}){

    function handleSearch(e){
        e.preventDefault()
        setSearch(e.target.value)
    }

    function handleTag(e){
        e.preventDefault()
        setSearchTags(e.target.value)
    }
    

    return(
        <>
            <div className="searchform">
            <input type = "text" placeholder="Search by name" value = {search} onChange = {handleSearch}/>
            </div>
            <div className="searchform">
            <input type = "text" placeholder="Search by tag" value = {searchTags} onChange = {handleTag}/>
            </div>
        </>
    )
}

export default SearchBar;