import Link from "next/link";

export default function Button({value,action}:{value:string,action:string}) {
  return (
    <Link href={`${action}`} className="text-sm text-body inline-flex w-fit  px-5 py-[10px] leading-[1.1] bg-green-700 text-white rounded-xl font-medium hover:bg-green-800 transition-colors">
      {value}

    </Link>
  )
}
