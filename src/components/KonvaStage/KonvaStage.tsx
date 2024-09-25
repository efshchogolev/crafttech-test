import { useState } from 'react'
import { Stage, Layer, Rect, Circle, Star } from 'react-konva'
import './KonvaStage.css'
import Konva from 'konva'
const InfiniteCanvas = (props: { tool: string | null }) => {
  type Shape = CustomCircle | CustomRectangle | CustomTriangle

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

  const [shapes, setShapes] = useState<Shape[]>([])

  const handleCanvasClick = (event: Konva.KonvaEventObject<MouseEvent>) => {
    const stage = event.target.getStage()
    const pointerPosition = stage?.getPointerPosition()
    switch (props.tool) {
      case 'circle': {
        setShapes((prev) => [
          ...prev,
          {
            type: 'circle',
            x: pointerPosition?.x || 0,
            y: pointerPosition?.y || 0,
            radius: 30,
            fill: 'blue',
          },
        ])
        break
      }
      case 'rectangle': {
        setShapes((prev) => [
          ...prev,
          {
            type: 'rect',
            x: pointerPosition?.x || 0,
            y: pointerPosition?.y || 0,
            width: 80,
            height: 50,
            fill: 'green',
          },
        ])
        break
      }
      case 'triangle': {
        setShapes((prev) => [
          ...prev,
          {
            type: 'triangle',
            x: pointerPosition?.x || 0,
            y: pointerPosition?.y || 0,
            fill: 'red',
            innerRadius: 20,
            outerRadius: 40,
          },
        ])
        break
      }

      default:
        break
    }
  }

  const handleGetShape = (shapes: Shape[]) => {
    return shapes.map((shape, i) => {
      switch (shape.type) {
        case 'circle':
          return (
            <Circle
              draggable={!props.tool}
              key={i}
              x={shape.x}
              y={shape.y}
              radius={shape.radius}
              fill={shape.fill}
            />
          )

        case 'rect':
          return (
            <Rect
              draggable={!props.tool}
              key={i}
              x={shape.x}
              y={shape.y}
              width={shape.width}
              height={shape.height}
              fill={shape.fill}
            />
          )

        case 'triangle':
          return (
            <Star
              draggable={!props.tool}
              key={i}
              numPoints={3}
              x={shape.x}
              y={shape.y}
              innerRadius={shape.innerRadius}
              outerRadius={shape.outerRadius}
              fill={shape.fill}
            />
          )

        default:
          return null
      }
    })
  }

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      // draggable
      onClick={handleCanvasClick}
      className="stage"
    >
      <Layer>{handleGetShape(shapes)}</Layer>
    </Stage>
  )
}

export default InfiniteCanvas
