import React from 'react';

const Filter = ({filterData, category, setCategory}) => {
    function filterHandler(title){
        setCategory(title);
    }

    return (
        <div className='flex flex-wrap space-x-4 gap-y-4 max-auto py-4 justify-center'>
            {
                filterData.map( (data) => {
                return <button
                    className='text-lg px-2 py-1 rounded-md font-medium text-white bg-black 
                    hover:bg-opacity-50 border-2 ransition-all duration-300'
                 key = {data.id}
                 onClick={()=> filterHandler(data.title)}
                 >
                    {data.title}
                </button>
                }
                 )
            }
        </div>
    );
}

export default Filter;
