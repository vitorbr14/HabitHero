import React from 'react'
import TableItem from './TableItem'
import TableHead from './TableHead'

const Table = () => {
  return (
   
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 relative">
    <TableHead />
        <tbody>
            <TableItem /> 
            
        </tbody>
    </table>
</div>

  )
}

export default Table