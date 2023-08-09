import Tasks from './components/Tasks'
import Button from './components/Button'
import AddForm from './components/Form'
export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>Task Tracker.</h1>
        <Button text='Add' color='green'/>
      </div>
      <AddForm/>
      <Tasks />
    </div>
  
  )
}
