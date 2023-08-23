import './style.css'
import { useState } from 'react';
import { Checkbox } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';
import { Flag } from '@mui/icons-material';


function TodoList(){
    //toDoData
    const [ todoData, setTodoData ] = useState([
        { id:1, thing: "Read book", done: true },
        { id:2, thing: "Write letter", done: false },
        { id:3, thing: "Edit cover", done: false }
    ]);


    //handle functioon
    function handleAddThings(){
        var inputThings=document.getElementById('Input').value;
        setTodoData([
            ...todoData,
            {
                id:todoData.length+1,
                thing:inputThings,
                done:false
            }
          ])
        inputThings = '';
    }

    function handleDoneChange(doneKey){
        setTodoData((todoData) =>
            todoData.map((todo) => todo.id === doneKey+1 ? { ...todo, done: !todo.done } : todo))
        console.log(doneKey);
    }

    function handleDelete(deleteKey){
        setTodoData(todoData.filter((_, i) => i !== deleteKey))
    }

    function handleMoveDone(){
        console.log('handleMoveDone');
    }

    //components function
    function Todo_things(item){
        return(
            <div className='w-full h-[80px] rounded-[6px] bg-white mb-4 border-l-[6px] border-[#97a2df] flex'>  
            <div className='pt-[15px] px-3 '>
                <Checkbox 
                checked={item.done} 
                onChange={()=>{handleDoneChange(item.id)}}
                sx={{color:'#7c8ad8','&.Mui-checked': {color:'#7c8ad8'},'& .MuiSvgIcon-root': { fontSize: 30 }}}
                />
            </div>
            <div className='w-full'>
                <span className={classNames('leading-[75px] text-[#7683cf] text-[20px]',{'line-through':item.done })}>{item.things}</span>
            </div>
            <div className='pt-[26px] px-5'>
                <CloseIcon onClick={()=>{handleDelete(item.id)}} className='text-[#98a1d3] text-[10px] cursor-pointer'/>
            </div>
            </div>
        )
    }

    //main content for export to App.js
    return(
        <div className='fullBg'>
            <div className=' container mx-auto px-4 '>
                <div className='border-b-2 border-[#97a2df] pt-[50px]'>
                    <div className='text-[#6877c9] text-[30px] leading-8 mb-2'>Todo List</div>
                    <div className='text-[#8b97da] text-[15px] mb-2'>Add things to do</div>
                </div>
                <div className='flex my-5'>
                    <div className='mr-[15px] text-[#7780b3] text-sm'>50%</div>
                    <div className='w-full bg-white flex rounded-2xl'>
                        <div className='w-[30%] bg-[#97a2df] rounded-2xl'></div>
                    </div>
                </div>
            </div>
                <div className='h-[500px] overflow-auto'>
                <div className=' container mx-auto px-4 '>
                    {
                        todoData.map((item,index) => (
                            <Todo_things key={index} id={index} things={item.thing} done={item.done}/>
                        ))
                    }

                </div>

                </div>
             <div className=' container mx-auto px-4 '>
                <div className='border-t-2 border-[#97a2df] mt-3 text-right text-[#8692d3] py-3'>
                    <div className='flex content-end'>
                        <div className='pr-2 w-full'>Move done things to end?</div>
                        <label className="inline-flex relative items-center mr-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                readOnly
                            />
                            <div
                                onClick = {() => {
                                    handleMoveDone();
                                }}
                                className="w-11 h-6 bg-white rounded-full peer peer-focus:ring-[#adb2d4]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#97a2df] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#97a2df]"
                            ></div>
                        </label>
                    </div>
                </div>

                <div className='text-[#909bda] text-[20px] mb-2'>Add to list</div>
                <form className='flex'>
                    <input id='Input' className='w-full rounded p-2'></input>
                    <button type='reset' className='h-100 w-12 ml-2 bg-[#7c8ad8] text-white rounded leading-10 text-2xl' onClick={() => {handleAddThings();}}>
                        <div className='mt-[-3px] mb-[3px]'>+</div>
                    </button>
                </form>
            </div>
        </div>
    )

}
export default TodoList;