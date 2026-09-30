export function Icon({ name, ...props }) {
  const paths = {
    heart: (
      <path d="M12 20S2 14 2 7.5C2 2 9 1 12 7c3-6 10-5 10 .5C22 14 12 20 12 20Z" />
    ),
    arrow: (
      <>
        <path d="M3 12h17M14 5l7 7-7 7" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v6M12 7v1" />
      </>
    ),
  };
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
export function Botanical({ className = "" }) {
  return (
    <svg
      className={`botanical ${className}`}
      viewBox="0 0 180 300"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1">
        <path d="M28 300C83 214 59 116 137 12M56 242C109 215 127 176 153 143M68 189C30 160 40 126 16 98M83 124C114 113 135 87 159 65" />
        <path
          d="M67 217C103 204 110 184 100 177C79 186 75 202 67 217ZM84 201C112 207 134 191 128 180C109 180 100 192 84 201ZM115 183C120 152 136 141 145 145C149 161 130 178 115 183ZM64 177C40 158 26 160 25 145C44 140 55 162 64 177ZM47 145C47 117 31 106 23 111C20 125 37 140 47 145ZM81 128C78 98 88 86 98 88C107 102 87 116 81 128ZM105 111C133 110 147 96 140 88C122 87 115 101 105 111ZM106 68C107 42 121 31 129 35C132 49 117 65 106 68ZM122 40C143 33 153 18 145 12C132 14 127 27 122 40ZM57 255C35 233 23 236 22 224C42 218 54 241 57 255Z"
          fill="currentColor"
          fillOpacity=".19"
        />
      </g>
    </svg>
  );
}
