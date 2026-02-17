export default function LightButton({ text, href }: { text: string, href: string }) {
  return (
    <a
            href={href}
            className=" inline-flex items-center gap-6 bg-white/10 rounded-3xl pl-6 pr-3 py-2.5 w-fit transition-colors"
          >
            <span>{text}</span>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bg-white text-black rounded-2xl p-1.5"
              style={{ transform: 'rotate(-45deg)' }}
            >
              <path
                d="M5 12h14m-7-7 7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
  );
}