const Connector = ({ startX, startY, endX, endY } : {
    startX: string,
    startY: string,
    endX: string,
    endY: string
}) => {
    return (
    <svg className="absolute stroke-red-700" width="100%" height="100%">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="20"
          markerHeight="14"
          refX="20"
          refY="7"
          orient="auto"
          stroke="0"
        >
          <polygon fill="red" stroke="0" points="0 0, 20 7, 0 14" />
        </marker>
      </defs>
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};

export default Connector;