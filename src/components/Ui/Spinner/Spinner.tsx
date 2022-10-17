const Spinner: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = 22, height = 22, ...props }) => {
  return (
    <svg
      data-testid="spinner"
      className="z-10 animate-rotate"
      viewBox="0 0 50 50"
      width={width}
      height={height}
      {...props}
    >
      <circle
        className="animate-dash"
        style={{
          strokeLinecap: "round",
        }}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      ></circle>
    </svg>
  );
};

export default Spinner;
