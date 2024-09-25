import { useState } from 'react'
import './App.css'
import InfiniteCanvas from './components/KonvaStage/KonvaStage'
import Toolbar from './components/Toolbar/Toolbar'

function App() {
  const [tool, setTool] = useState<string>('')

  return (
    <div className="app">
      <Toolbar setTool={setTool} tool={tool} />
      <InfiniteCanvas tool={tool} />
    </div>
  )
}

export default App
