function OutlineButton() {
  return (
    <div
      className="rounded-full py-4 px-8 cursor-pointer uppercase text-blue medium text-sm flex items-center gap-2"
      style={{ border: "1px solid #0d1324" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 48 48"
      >
        <g
          fill="none"
          stroke="#0d1324"
          strokeLinejoin="round"
          strokeWidth="4"
        >
          <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
          <path d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z" />
        </g>
      </svg>
      <span>Así trabajamos</span>
    </div>
  );
}

export default OutlineButton;
