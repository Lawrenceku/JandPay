const React = require("react");

function Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/props.children
}

const IconElement = React.forwardRef(AcademicCapIcon);
export default IconElement;