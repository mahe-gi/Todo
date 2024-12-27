export default function signup() {
  return (
    <div className=" h-screen w-screen flex">
      <div className=" h-full w-[50%] flex items-center justify-center">
        <div className=" h-1/2 w-[40%]  border  rounded-md  backdrop-filter backdrop-blur-2xl bg-opacity-0">
          <div className="h-[20%]  text-center pt-2">
            <h3 className=" text-3xl capitalize pt-3 ">sign-in</h3>
            <p className=" text-sm pt-2 text-gray-600">yours fav todo app</p>
          </div>
          <div className=" h-[80%] w-full flex items-center flex-col  gap-5 pt-10">
            <input
              type="text"
              placeholder=" username "
              className=" border px-2 py-2 w-[80%] rounded-sm "
            />
            <input
              type="password"
              placeholder=" password"
              className=" border px-2 py-2 w-[80%] rounded-sm"
            />
            <button className="border px-2 py-2 w-[80%] rounded-sm bg-gray-800 text-white">
              {" "}
              sign-in{" "}
            </button>
            <div>
              <p className=" text-sm  text-gray-700"> dont have an account</p>
              <p className=" cursor-pointer underline text-sm text-center">
                sign up ?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-full w-[50%] text-gray-500 border-l-2 flex items-center justify-center px-10">
        <h5 className="font-bold text-2xl align-baseline">
          Start organizing your life <br /> with just one sign-in.
        </h5>
      </div>
    </div>
  );
}
