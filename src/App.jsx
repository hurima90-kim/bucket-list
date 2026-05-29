import BucketContainer from "./components/BucketContainer";
import BucketHeader from "./components/BucketHeader";
import BucketList from "./components/BucketList";
import BucketCreate from "./components/BucketCreate";
import { BucketProvider } from "./utils/context/Bucketcontext";

const App = () => {
  return (
    <BucketProvider>
      <BucketContainer>
        <BucketHeader />
        <BucketList />
        <BucketCreate />
      </BucketContainer>
    </BucketProvider>
  );
};

export default App;
