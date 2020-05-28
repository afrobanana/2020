import React, { PureComponent } from 'react'

const THUMBNAIL_STYLE = {
  lineHeight: 1,
  overflow: 'hidden',
  position: 'relative',
}
const THUMBNAIL_IMAGE_STYLE = {
  left: '50%',
  position: 'relative',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
}

const getThumbnailStyle = ({ height='300px', }) => ({
  ...THUMBNAIL_STYLE,
  height,
})


const getThumbnailImageStyle = ({ offset = [0, 0], }) => {
  const [left, top] = offset
  return {
    ...THUMBNAIL_STYLE,
    left,
    top,
    transform: `translate(-${left}, -${top})`,
  }
}

export default class Thumbnail extends PureComponent {
  render() {
    const { children, offset, height } = this.props
    return (
      <div style={getThumbnailStyle({ height, })}>
        <div style={getThumbnailImageStyle({ offset })}>{children}</div>
      </div>
    )
  }
}
