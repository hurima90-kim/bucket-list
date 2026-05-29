import { createContext, useRef, useState } from "react";
import { initialBuckets } from "../../components/BucketData";

export const BucketContext = createContext();

export const BucketProvider = ({ children }) => {
  const [buckets, setBuckets] = useState(initialBuckets);
  const [value, setValue] = useState("");

  const nextId = useRef(6);

  const onToggle = (id) => {
    setBuckets(
      buckets.map((bucket) =>
        bucket.id === id ? { ...bucket, chk: !bucket.chk } : bucket,
      ),
    );
  };

  const onRemove = (id) => {
    setBuckets(buckets.filter((bucket) => bucket.id !== id));
  };

  const onDataChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const bucket = {
      id: nextId.current,
      text: value,
      chk: false,
    };
    setBuckets([...buckets, bucket]);
    setValue("");
    nextId.current += 1;
  };

  return (
    <BucketContext.Provider
      value={{ buckets, value, onToggle, onRemove, onDataChange, onSubmit }}
    >
      {children}
    </BucketContext.Provider>
  );
};
