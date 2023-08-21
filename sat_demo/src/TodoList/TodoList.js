import './style.css'

function TodoList(){
    return(
        <div className='fullBg'>
            <div className='w-full h-full container mx-auto px-4 '>
                <div className='border-b-2 border-[#97a2df] pt-[50px]'>
                    <div className='text-[#97a2df] font-bold text-[30px] leading-8 mb-2'>Todo List</div>
                    <div className='text-[#97a2df] text-[15px] mb-2'>Add things to do</div>
                </div>
                <div className='flex my-5'>
                    <div className='mr-[20px] text-[#97a2df]'>50%</div>
                    <div className='w-full bg-white flex rounded-2xl'>
                        <div className='w-[30%] bg-[#97a2df] rounded-2xl'></div>
                    </div>
                </div>

                {/* compoent content things*/}

                <div className='border-t-2 border-[#97a2df] mt-3 text-right text-[#97a2df] py-3'>
                    Move done things to end?
                
                </div>

                <div className='text-[#97a2df]'>Add to list</div>
                <div className='flex'>
                    <input></input>
                    <button className='h-100 w-10 ml-2 bg-[#7c8ad8] text-white rounded leading-8 text-base'>+</button>
                </div>
            </div>
        </div>
    )

}
export default TodoList;