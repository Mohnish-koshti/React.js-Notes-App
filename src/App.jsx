import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('');
  const [Detail, setDetail] = useState('');
  const [Task, setTask] = useState([]);

  const submitHandler = (e)=>{
    console.log('Form is submited')
    e.preventDefault()
    // console.log(title,Detail)
    const copyTask = [...Task]
    // console.log(Task)
    copyTask.push({title,Detail})
    setTask(copyTask)
    console.log(copyTask)

    settitle('')
    setDetail('')
  }

  const deleteNote = (idx)=>{
    // console.log('note deleted')
    const copyTask = [...Task]
    console.log(copyTask)
    // console.log(copyTask[idx])
    copyTask.splice(idx)
    setTask(copyTask)
  }

  return (
    <div className='min-h-fit bg-black  p-5 text-white'>
      <h1 className='text-3xl font-bold ml-10'>Your Notes</h1>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex items-start justify-between p-10'>
        
        

        <div className='flex w-1/2 items-start gap-5  flex-col '>

          <input type="text" value={title} onChange={(e)=>{
            settitle(e.target.value)
          }} className='px-5 py-2 outline-none w-full border-2 rounded' placeholder='Enter Notes Heading'  />

          <textarea type="text" value={Detail} onChange={(e)=>{
            setDetail(e.target.value)
          }} className='px-5 py-2 w-full  outline-none h-40 font-medium border-2 rounded' placeholder='Enter Details' />
          
          <button className='bg-green-950 active:bg-green-200 text-green-400 w-full outline-none px-5 py-2 font-medium rounded'>Add notes</button>

        </div>
        <img className='h-80 font-medium' src="https://www.pngmart.com/files/23/Note-Paper-PNG-Pic.png" h-80 alt="" />
      </form>
      <div className='p-10 '>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 '>
          {Task.map((elem,idx)=>{
            return <div key={idx} className='h-52 w-42 flex flex-col justify-between items-center rounded-2xl text-black p-2 bg-cover bg-[url(https://img.freepik.com/premium-photo/sticky-green-post-it-note-isolated-transparent-white-background-v-52-job-id-ba5a0837cb38405395dc8073b031dd43_941600-331731.jpg)]'>
              <div>
                <h3 className='text-xl ml font-bold'>{elem.title}</h3>
                 <p className='mt-3'>{elem.Detail}</p>
              </div>
              <button className='bg-red-400 font-bold cursor-pointer active:scale-95  px-5' onClick = {()=>{
                deleteNote(idx)
              }}>Delete</button>
            </div>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App
