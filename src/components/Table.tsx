import React, { useState } from 'react'

type DataItem = {
    [key: string] : string | number;
}
type TableProps = {
    data: DataItem[]
}


const Table = ({data} : TableProps) => {
    const[searchValue, setSearchValue] = useState("");
    const[sortConfig, setSortConfig] = useState<{key : string|null, direction : string}>({key:null,direction:'asc'});
    
    const handleSearchChange = ( e : React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value); 
    }

    const handleSort = (key: string) => {

        let direction = 'asc';
        if(sortConfig.key === key && sortConfig.direction === 'asc')
        {
            direction= 'desc';
        }
        setSortConfig({key,direction});
    }

    const sortedData = React.useMemo(()=> {

        let sortTableData = [...data];
        if(sortConfig.key !=null){
            sortTableData.sort((a,b) => {
                console.log(a[sortConfig.key!] + " " 
                + b[sortConfig.key!]);
                if(a[sortConfig.key!] < b[sortConfig.key!]){
                    return sortConfig.direction === 'asc' ? -1 : 1
                }
                if(a[sortConfig.key!] > b[sortConfig.key!]){
                    return sortConfig.direction === 'asc' ? 1 : -1
                }
                return 0;
            });
        }
        return sortTableData;
    },[sortConfig,data]);

    const filteredData = sortedData.filter (item =>
        Object.values(item).some(val =>
            val.toString().toLowerCase().includes(searchValue.toString().toLowerCase())
            )
        );

    return (
        <div>
            <input 
                type="text"
                placeholder="Search...."
                value={searchValue}
                onChange={(e)=>handleSearchChange(e)}
            />
            <table>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key)=>
                        <th key={key} onClick={()=>handleSort(key)}>
                            {key}
                            {sortConfig.key === key ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : null}
                        </th> 
                        )}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item,index)=>{
                        return(
                            <tr key={index}>
                                {Object.values(item).map((value,index)=>
                                <td key={index}>
                                   {value}
                                </td>
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        
        </div>
  )
}

export default Table
