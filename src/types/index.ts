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
