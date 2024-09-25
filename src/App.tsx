import { useState } from 'react'
import './App.css'
import InfiniteCanvas from './components/KonvaStage/KonvaStage'
import Toolbar from './components/Toolbar/Toolbar'

function App() {
  const [tool, setTool] = useState<string | null>(null)

  return (
    <div className="app">
      <Toolbar setTool={setTool} />
      {/* <div className="app__canvasContainer"> */}
      <InfiniteCanvas tool={tool} />
      {/* </div> */}
    </div>
  )
}

export default App
