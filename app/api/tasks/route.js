import {NextResponse} from 'next/server' 
import tasks from './data.json'
import {v4 as uuidv4} from 'uuid'
import path from 'path'

export async function GET(request){
    const allTasks = await axios.get('http://localhost:5000/tasks')
    return NextResponse.json(allTasks)
    }
export async function POST(request){
    const { 
        text, day, reminder
    } = await request.json()
    const newTask = {
        id: uuidv4(),
     text,
     day,
     reminder 
    }
    const dir = '/data.json'
   const thispath =  path.join(__dirname, dir)
    tasks.push(newTask)
    return NextResponse.json({tasks})
}