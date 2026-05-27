import BucketItem from "./BucketItem";

const BucketList = ({ buckets, onToggle, onRemove }) => {
  return (
    <div className="bucket-list pt-5 px-8 pb-12 overflow-y-auto">
      {buckets.map((bucket) => (
        <BucketItem
          key={bucket.id}
          id={bucket.id}
          text={bucket.text}
          chk={bucket.chk}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default BucketList;
