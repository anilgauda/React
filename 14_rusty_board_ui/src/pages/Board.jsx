import React from 'react'
import Column from './Column'

function Board({columns}) {

  return (
    <div className='w-screen h-screen overflow-scroll bg-slate-900 flex flex-wrap justify-evenly'>
              {
          columns.map(column => (
          <Column title={column} key={column.toLowerCase()} id={column.toLowerCase()}/>
          ))
        }
    </div>
  )
}

export default Board