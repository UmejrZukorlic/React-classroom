import React, { useState } from 'react'

function SearchMock(props) {

    const [searchValue,setSearchValue]= useState("")
    

  return (
    <div>
        <SearchInput value={searchValue} setValue={setSearchValue}/>
        <SearchList search={searchValue}/>
    </div>
  )
}
const SearchInput = (props) => {
    const {value,setValue}=props
    return <input type="text" value={value} onChange={e=>setValue(e.target.value)}/>
}
const SearchList = (props) => {
    const{search}=props;
    const list= [{title:"Harry potter 6"},{title:"How to train your dragon"},{title:"Kamiondzije"},{title:"Game of thrones"},{title:"Lion king"},]
    const searchResult = list.filter((movie)=>{
        return movie.title.toLowerCase().includes(search.toLowerCase())
    });
    return <div>
        {searchResult.map((movie)=>{
            return <p>{movie.title}</p>
        })}
    </div>
}

export default SearchMock