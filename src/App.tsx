import './App.css'
import Stories from './Stories'
import storiesData from './data/stories'

const App = () => {
  return (
    <div className='container'>
      <Stories stories={storiesData} />
    </div>
  )
}

export default App
