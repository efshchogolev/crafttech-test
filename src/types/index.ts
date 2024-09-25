export type Shape = CustomCircle | CustomRectangle | CustomTriangle

type SimpleShape = {
  x: number
  y: number
  fill: string
}

type CustomCircle = SimpleShape & {
  type: 'circle'
  radius: number
}

type CustomRectangle = SimpleShape & {
  type: 'rect'
  width: number
  height: number
}

type CustomTriangle = SimpleShape & {
  type: 'triangle'
  innerRadius: number
  outerRadius: number
}

export type ToolbarProps = {
  setTool: React.Dispatch<React.SetStateAction<string>>
  tool: string
  onClearShapes: () => void
}

export type CanvasProps = {
  tool: string
  setShapes: React.Dispatch<React.SetStateAction<Shape[]>>
  shapes: Shape[]
}
