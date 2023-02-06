export default function Home() {
  return (
    <div className="Parent h-screen bg-slate-900 text-white">
      <input
        type="text"
        className="border-2 border-double border-rose-600 outline-none"
      />
      <div className="grid grid-cols-3 divide-x divide-dashed divide-red-500">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
    </div>
  );
}
