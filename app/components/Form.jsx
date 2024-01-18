'use client'
import {useState} from 'react'
import React from 'react'

const FormPage = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = async(e) => {
        e.preventDefault()
        const formData = {text, day, reminder}
        try{
            if(!text || !day){
                alert('Please fill in the required fields')
                return
            }
            const response = await fetch('http://localhost:3000/api/tasks', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json', 
                }, 
                body: JSON.stringify(formData)
            }) 
if(response.ok){
    setText('')
    setDay('') 
    setReminder(false)
}else{
    console.error('There was an error in submitting the file.')
}
        }
        catch(error){
            console.log('Failed to submit the file. '+ error.message)
        }
    }
  return (
    <form className="add-form" method="POST" onSubmit={onSubmit}>
    <div className="form-control">
        <label htmlFor="text" id="text">Text</label>
        <input type="text" placeholder="Add some text"
          name="text" value={text} 
        onChange={(e) => setText(e.target.value)} />
    </div>

    <div className="form-control">
        <label htmlFor="day" id="day">Day</label>
        <input type="text" name="day" value={day} 
        placeholder="Add a date here."
        onChange={(e) => setDay(e.target.value)} />
    </div>

    <div className="form-control-check">
        <label htmlFor="text" id="reminder">Set Reminder</label>
        <input type="checkbox" className="" name="checkbox" value={reminder} 
        onChange={(e) => setReminder(e.currentTarget.checked)} />
    </div><br/>
<button type="submit" className="btn btn-block">
    Submit
</button>
    </form>
  )
}

export default FormPage
