import React, { useContext, useState } from "react";
import { MdAdd } from "react-icons/md";
import { BucketContext } from "../utils/context/Bucketcontext";

const BucketCreate = () => {
  const { value, onDataChange, onSubmit } = useContext(BucketContext);

  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);
  const onClose = () => setOpen(false);

  return (
    <React.Fragment>
      <div
        className={`w-full bottom-0 left-0 absolute transition duration-200 ${
          open ? "translate-y-0" : "translate-y-full"
        } createform ${open ? " active" : ""}`}
      >
        <form
          className="bg-[#f8f9fa] pt-8 pr-28 pb-9 pl-8 rounded-b-2xl border-t border-[#e9ecef]"
          onSubmit={(e) => {
            onSubmit(e);
            onClose();
          }}
        >
          <input
            type="text"
            placeholder="새로운 버킷리스트를 입력 후, Enter를 누르세요."
            className="w-full p-3 rounded box-border border border-[#dee2e6] outline-none text-base"
            value={value}
            onChange={onDataChange}
          />
        </form>
      </div>
      <div
        className={`absolute right-4 bottom-4 z-5 w-20 h-20 cursor-pointer flex items-center justify-center shadow-[2px_2px_5px_rgba(0,0,0,0.3)] rounded-full text-[60px] text-white transition-all duration-125 ease-in hover:bg-[#36bffc] ${
          open ? "bg-[#fa5252] rotate-45" : "bg-[#0593d3]"
        } circlebox ${open ? " active" : ""}`}
        onClick={onToggle}
      >
        <MdAdd />
      </div>
    </React.Fragment>
  );
};

export default BucketCreate;
