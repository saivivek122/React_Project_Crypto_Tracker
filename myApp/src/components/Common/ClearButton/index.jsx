import React from 'react'

const ClearButton = ({clearSearch}) => {
  return (
    <div>
      <button onClick={clearSearch}>Clear</button>
    </div>
  )
}

export default ClearButton
