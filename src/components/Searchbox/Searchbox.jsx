import React from 'react'

const Searchbox = (props) => {
  return (
    <div className='pa2'>
      <input type="text" className='pa3 ba b--green bg-lightest-blue' placeholder="Enter Robot Name" onChange={props.onChangeText}/>
    </div>
  )
}


export default Searchbox