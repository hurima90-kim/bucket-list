import BucketContainer from "./components/BucketContainer";
import BucketHeader from "./components/BucketHeader";
import BucketList from "./components/BucketList";
import BucketCreate from "./components/BucketCreate";
import { initialBuckets } from "./components/BucketData";
import { useRef, useState } from "react";

const App = () => {
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
    <BucketContainer>
      <BucketHeader buckets={buckets} />
      <BucketList buckets={buckets} onToggle={onToggle} onRemove={onRemove} />
      <BucketCreate
        value={value}
        onDataChange={onDataChange}
        onSubmit={onSubmit}
      />
    </BucketContainer>
  );
};

export default App;
