import Link from "next/link";

interface HoverButtonProps {
  href?: string;
  onClick?: () => void;
  text: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({
  href = "",
  onClick = () => {},
  text,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex flex-row relative justify-end group w-36 items-center rounded-full bg-black p-1 text-sm font-bold"
    >
      <div className="absolute left-5 text-white group-hover:text-black duration-500 transition-all">
        {text}
      </div>
      <div className="flex justify-end p-2 bg-background w-10 rounded-full h-full group-hover:w-full transition-all ease-in-out duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
        </svg>
      </div>
    </Link>
  );
};

export default HoverButton;
