import { useState } from 'react'
import './App.css'
import InfiniteCanvas from './components/KonvaStage/InfiniteCanvas'
import Toolbar from './components/Toolbar/Toolbar'
import { Shape } from './types'

function App() {
  const [tool, setTool] = useState<string>('')
  const [shapes, setShapes] = useState<Shape[]>([])
  const handleClearCanvas = () => {
    setShapes([])
  }

  return (
    <div className="app">
      <Toolbar
        setTool={setTool}
        tool={tool}
        onClearShapes={handleClearCanvas}
      />
      <InfiniteCanvas tool={tool} shapes={shapes} setShapes={setShapes} />
    </div>
  )
}

export default App
