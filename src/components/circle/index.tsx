export function Circle({ percentage, circleWidth }: any) {
  const radius = 20;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  const colors =
    percentage >= 75
      ? "stroke-green-500"
      : percentage >= 45
      ? "stroke-yellow-500"
      : percentage >= 0 ?? "stroke-red-500";

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={"5px"}
          r={radius}
          className="fill-slate-950 stroke-slate-600"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={"4px"}
          r={radius}
          className={`fill-none ${colors}`}
          style={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          fill="white"
          className="text-sm font-semibold"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
}
