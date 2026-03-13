export default function FeautreCard() {
  return (
    <div className="rounded-2xl p-6.25 bg-gray-200 flex flex-col gap-5 transition-colors">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="#3E24D1"
          viewBox="0 0 256 256"
        >
          <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-34.32,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </div>
      <h3 className="txt-heading text-[22px] !font-medium">Natural care</h3>
      <p className="text-lg text-(--text-light) flow leading-[1.4]">
        Elevate your daily routine with pure, nature-based solutions that
        simplify the way you care for your body and mind.
      </p>
    </div>
  );
}
