import { useState } from 'react';

function Counter(){

    const [count,setCount] = useState(0);

    function increaseHandeler(){
        setCount(count+1);
    }

    function decreaseHandeler(){
        setCount(count-1);
    }

    function resetHandeler(){
        setCount(0);
    }

    return(
        <div className = "w-[100vw h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
            <div className='text-[#0398d4] font-medium text-2xl '>Increment & Decrement</div>
            <div className='bg-white flex justify-center gap-12 p-3 rounded-sm text-[25px] text-[#344151]'>

            <button onClick={decreaseHandeler} className='border-r-2 text-center w-20 text-5xl border-[#bfbfbf]'>
            -
            </button>

            <div className=' text-center  text-5xl font-bold gap-12'>
            {count}
            </div>

            <button onClick={increaseHandeler} className='border-l-2 text-center w-20 text-5xl border-[#bfbfbf]'>
            +
            </button>
            
            </div>
        
            <button onClick={resetHandeler} className='bg-[#0398d4] text-white px-5 py-2 rounded-xl text-lg'>
                Reset
            </button>
        </div>
    );
}

export default Counter;