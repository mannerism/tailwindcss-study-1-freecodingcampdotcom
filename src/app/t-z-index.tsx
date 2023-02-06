export default function Home() {
  return (
    <div className="relative overflow-auto rounded-xl p-8">
      <div className="container flex justify-center -space-x-3 font-mono text-sm font-bold leading-6 text-white">
        <div className="z-40 flex h-16 w-16 items-center justify-center rounded-full border border-white bg-red-500 p-3 hover:z-50">
          05
        </div>
        <div className="z-30 flex h-16 w-16 items-center justify-center rounded-full border border-white bg-red-500 p-3 hover:z-50">
          04
        </div>
        <div className="z-20 flex h-16 w-16 items-center justify-center rounded-full border border-white bg-red-500 p-3 hover:z-50">
          03
        </div>
        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white bg-red-500 p-3 hover:z-50">
          02
        </div>
        <div className="z-0 flex h-16 w-16 items-center justify-center rounded-full border border-white bg-red-500 p-3 hover:z-50">
          01
        </div>
      </div>
    </div>
  );
}
