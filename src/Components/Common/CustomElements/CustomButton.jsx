import React from "react";

const CustomButton = ({ message, width }) => {
  return (
    <>
      <div>
        <button
          type="submit"
          className={
            "flex w-[131px] h-[48px] justify-center py-[14px] rounded-3xl border border-transparent bg-blue-400  px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none  " +
            " " +
            (width ? width : "w-full")
          }
        >
          {message}
        </button>
      </div>
    </>
  );
};

export { CustomButton };