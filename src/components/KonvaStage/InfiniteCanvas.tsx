import { Stage, Layer, Rect, Circle, Star } from 'react-konva'
import './InfiniteCanvas.css'
import Konva from 'konva'
import { KonvaEventObject } from 'konva/lib/Node'
import { Shape } from '../../types'

const InfiniteCanvas = (props: {
  tool: string
  setShapes: React.Dispatch<React.SetStateAction<Shape[]>>
  shapes: Shape[]
}) => {
  const getRelativePointerPosition = (
    node: Konva.Node,
  ): { x: number; y: number } => {
    const transform = node.getAbsoluteTransform().copy()
    transform.invert()
    return transform.point(
      node.getStage()?.getPointerPosition() || { x: 0, y: 0 },
    )
  }

  const handleCanvasClick = (event: KonvaEventObject<MouseEvent>) => {
    const stage = event.target.getStage()
    if (stage) {
      const pointerPosition = getRelativePointerPosition(stage)

      switch (props.tool) {
        case 'circle': {
          props.setShapes((prev) => [
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
          props.setShapes((prev) => [
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
          props.setShapes((prev) => [
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
      draggable={!props.tool}
      onClick={handleCanvasClick}
      className="stage"
    >
      <Layer>{handleGetShape(props.shapes)}</Layer>
    </Stage>
  )
}

export default InfiniteCanvas
