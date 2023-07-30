import React, { useState } from 'react'
import { SearchWrapper } from './styled'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

  const [value,setValue] = useState('')

  const navigate = useNavigate()

  const searchHandler = (event) => {
    if(event.keyCode === 13){
      navigate(`/search?keyword=${value}`)
    }
  }


  return (
    <SearchWrapper >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
            <path fillRule="evenodd" d="M11.163 5a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zM3 11.163a8.163 8.163 0 1114.599 5.021l3.108 3.109a1 1 0 01-1.414 1.414l-3.108-3.108A8.163 8.163 0 013 11.163z" clipRule="evenodd">
        </path>
        </svg>
        <input 
          value={value}
          onKeyDown={searchHandler} 
          onChange={(e)=>{setValue(e.target.value)}} 
          // size="18" 
          placeholder='搜索'/>
    </SearchWrapper>
  )
}

export default SearchBar