import './Toolbar.css'

const Toolbar = (props: {
  setTool: React.Dispatch<React.SetStateAction<string>>
  tool: string
}) => {
  return (
    <div className="toolbar">
      <select
        value={props.tool || ''}
        onChange={(evt) => {
          props.setTool(evt.target.value)
        }}
      >
        <option value="">Choose a form</option>
        <option value="triangle">triangle</option>
        <option value="rectangle">rectangle</option>
        <option value="circle">circle</option>
      </select>

      <button className="toolbar__button" onClick={() => props.setTool('')}>
        cursor
      </button>
    </div>
  )
}

export default Toolbar
