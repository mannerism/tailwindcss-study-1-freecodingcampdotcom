export default function Home() {
  return (
    <div className="Parent h-screen p-4">
      <div className="inline-block rounded-lg border bg-white p-4 text-black shadow-md">
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is my div</p>
        <button className="cursor-pointer rounded-lg bg-cyan-500 px-3 py-2 text-white shadow-md shadow-cyan-500/50">
          Say Hello
        </button>
      </div>
    </div>
  );
}
