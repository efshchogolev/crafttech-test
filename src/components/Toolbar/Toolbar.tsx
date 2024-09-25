import './Toolbar.css'

const Toolbar = (props: {
  setTool: React.Dispatch<React.SetStateAction<string | null>>
}) => {
  return (
    <div className="toolbar">
      <button
        className="toolbar__button"
        onClick={() => props.setTool('circle')}
      >
        circle
      </button>
      <button
        className="toolbar__button"
        onClick={() => props.setTool('rectangle')}
      >
        rect
      </button>
      <button
        className="toolbar__button"
        onClick={() => props.setTool('triangle')}
      >
        triangle
      </button>

      <button className="toolbar__button" onClick={() => props.setTool(null)}>
        cursor
      </button>
    </div>
  )
}

export default Toolbar
