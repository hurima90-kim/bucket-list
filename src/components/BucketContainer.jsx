const BucketContainer = ({ children }) => {
  return (
    <div className="w-lg h-192 overflow-hidden absolute m-auto top-0 bottom-0 left-0 right-0 bg-white rounded-2xl shadow-md">
      {children}
    </div>
  );
};

export default BucketContainer;
