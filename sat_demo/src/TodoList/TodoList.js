import './style.css'

function TodoList(){
    return(
        <div className='fullBg w-full h-full container mx-auto px-4 '>    
            <div className='border-b-2 border-blue-400'>
                <div>Todo List</div>
                <div>Add things to do</div>
            </div>
            {/* compoent 50%*/}
            {/* compoent content things*/}
            <div className='border-t-2 border-blue-400 mt-3 text-right'>
                Move done things to end?
            
            </div>

            <div>Add to list</div>
            <div className='flex'>
                <input></input>
                <button className='h-100 w-10 ml-2 bg-blue-700'>+</button>
            </div>
        </div>
    )

}
export default TodoList;