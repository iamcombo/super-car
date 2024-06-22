const Loading = () => {
  return (
    <div className="mx-auto flex h-dvh max-w-2xl place-items-center justify-center">
      <svg className="h-8 w-8 animate-spin" viewBox="0 0 100 100">
        <circle
          fill="none"
          strokeWidth="10"
          className="stroke-current opacity-40"
          cx="50"
          cy="50"
          r="40"
        />
        <circle
          fill="none"
          strokeWidth="10"
          className="stroke-current"
          strokeDasharray="250"
          strokeDashoffset="210"
          cx="50"
          cy="50"
          r="40"
        />
      </svg>
    </div>
  );
};

export default Loading;
