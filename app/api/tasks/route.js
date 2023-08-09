import {NextResponse} from 'next/server' 
import tasks from './data.json'
import {v4 as uuidv4} from 'uuid'
import path from 'path'

export async function GET(request){
    return (
        NextResponse.json(tasks)
    )
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
    console.log(thispath)
    tasks.push(newTask)
    return NextResponse.json({tasks})
}