import React from 'react'

const Searchbox = (props) => {
  return (
    <div className='pa2'>
      <input aria-label='Search robots' type="search" className='pa3 ba b--green bg-lightest-blue' placeholder="Enter Robot Name" onChange={props.onChangeText}/>t
    </div>
  )
}


export default Searchbox