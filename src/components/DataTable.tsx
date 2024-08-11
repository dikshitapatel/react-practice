import React from 'react'
import Table from './Table'

const sampleData = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'San Francisco' },
    { name: 'Charlie', age: 35, city: 'Los Angeles' },
    { name: 'David', age: 40, city: 'Chicago' },
    { name: 'Eve', age: 45, city: 'Houston' },
];

const DataTable = () => {

  return (
    <div className='App-body'>
      <Table data={sampleData}/>
    </div>
  )
}

export default DataTable
