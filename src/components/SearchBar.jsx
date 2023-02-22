import React from 'react'

function SearchBar(props) {
  return (
    <input type='text' value={props.search} onChange={event => {props.setSearch(event.target.value)}}/>
  )
}

export default SearchBar