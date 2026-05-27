import { MdDelete, MdDone } from "react-icons/md";

const BucketItem = ({ id, text, chk, onToggle, onRemove }) => {
  return (
    <div className="relative flex items-center p-3 [&:hover_.remove]:block">
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-2xl mr-5 border border-[#ced4da] text-2xl cursor-pointer *:hidden *:text-[#0593d3] [&.active]:border-[#0593d3] [&.active>*]:block [&.active+p]:text-[#0593d3] [&.active+p]:line-through checkcircle ${chk ? "active" : ""}`}
        onClick={() => onToggle(id)}
      >
        <MdDone />
      </div>
      <p className="text-xl text-[#495057]">{text}</p>
      <div
        className="remove absolute right-0 text-2xl text-[#dee2e6] cursor-pointer transform-[translateY(-50%,50%)] hover:text-[#ff6b6b] hidden"
        onClick={() => onRemove(id)}
      >
        <MdDelete />
      </div>
    </div>
  );
};

export default BucketItem;
