import BucketContainer from "./components/BucketContainer";
import BucketHeader from "./components/BucketHeader";
import BucketList from "./components/BucketList";
import BucketCreate from "./components/BucketCreate";

const App = () => {
  return (
    <BucketContainer>
      <BucketHeader />
      <BucketList />
      <BucketCreate />
    </BucketContainer>
  );
};

export default App;
