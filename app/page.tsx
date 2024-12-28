export default function Home() {
  return (
    <div className=" h-screen w-screen flex items-center justify-center flex-col">
      <div className=" pb-4 text-2xl">Todo</div>
      <div className=" h-[70%] w-1/2">
        <input type="text" className=" border w-[80%] py-3" />
        <button className="border w-[20%] py-3 bg-gray-700 text-white ">
          add
        </button>
      </div>
    </div>
  );
}
