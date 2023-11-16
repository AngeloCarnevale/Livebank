export default function Card({ title, content, icon }) {
  return (
    <div className="bg-white p-2 flex w-full text-center flex-col justify-center w-1/4 items-center gap-4">
      {icon}
      <div className="flex w-2/4 flex-col gap-2">
        <h1 className="w-full font-bold text-xl">{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}
