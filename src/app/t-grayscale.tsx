export default function Home() {
  return (
    <div className="Parent h-screen p-4">
      <div className="shadow-50 inline-block rounded-lg border bg-white p-4 text-black grayscale hover:grayscale-0">
        <img
          className="mb-4 h-64 w-64"
          src="https://images.unsplash.com/photo-1536663815808-535e2280d2c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
          alt=""
        />
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is my div</p>
        <button className="cursor-pointer rounded-lg bg-cyan-400 px-3 py-2 text-white shadow-cyan-500/50">
          Say Hello
        </button>
      </div>
    </div>
  );
}
