import Button from "./button";

type Props = {
  title: string;
  description: string;
  label: string;
  buttonValue?: string;
  action:string
};
export default function SectionHeader({
  title,
  description,
  label,
  buttonValue,
  action
}: Props) {
  return (
    <div className="w-full flex flex-col gap-2.5">
      <div>
        <span className="uppercase text-sm  flow text-green-700">
          {label}
        </span>
      </div>
      <div className="flex gap-10 flex-col lg:flex-row justify-between w-full">
        <div className="max-w-120 w-full">
          <h2 className="w-full leading-[1.1px] font-semibold text-[36px] md:text-[44px] txt-heading">
            {title}
          </h2>
        </div>
        <div className="max-w-125 flex flex-col gap-2.5 w-full">
          <p className="flow w-full text-body text-lg text-gray-600">
            {description}
          </p>
          {buttonValue && <Button action={action} value={buttonValue} />}
        </div>
      </div>
    </div>
  );
}
