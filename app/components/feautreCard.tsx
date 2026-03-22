import Image from "next/image";

type features={
  id: number;
  title: string;
  description: string;
  icon: any;
}
export default function FeautreCard({ feature }: { feature: features }) {
  return (
    <div className="rounded-[25px] p-6.25 bg-gray-200 flex flex-col gap-5 transition-colors">
      <div>
        <Image src={feature.icon} alt={feature.title} width={48} height={48} />
      </div>
      <h3 className="txt-heading text-[22px] !font-medium">{feature.title}</h3>
      <p className="text-lg text-(--text-light) text-body flow leading-[1.4]">
        {feature.description}
      </p>
    </div>
  );
}
