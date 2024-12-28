export default function signup() {
  return (
    <div className=" h-screen w-screen">
      <div className=" h-full w-full flex items-center justify-center ">
        <div className=" h-[70%] w-1/4 border rounded-md ">
          <div className=" h-[20%] w-full text-center pt-6  ">
            <h3 className=" text-4xl capitalize"> sign-up</h3>
            <p className=" text-sm pt-3 text-gray-600 capitalize">
              {" "}
              get started here
            </p>
          </div>

          <div className=" h-[70%] w-full flex flex-col gap-6 items-center justify-center pt-10">
            <input
              type="e-mail"
              className=" border px-2 py-2 w-[80%]"
              placeholder="email"
            />

            <input
              type="password"
              className=" border py-2 w-[80%] px-2 rounded-md"
              placeholder="set password"
            />
            <input
              type="password"
              className=" border py-2 w-[80%] px-2"
              placeholder="set password"
            />
            <button className="border py-2 w-[80%] bg-gray-900 text-white  ">
              {" "}
              sign-up
            </button>
            <div>
              <p className=" text-gray-600">already have an account ?</p>
              <h3 className=" text-center text-gray-600 underline cursor-pointer">
                sign-in
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
