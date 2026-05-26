const BucketHeader = () => {
  const today = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const dateString = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    day: today.getDay(),
  };

  // 비구조화 할당
  const { year, month, date, day } = dateString;

  return (
    <div className="p-6 border border-[#e9ecef]">
      <h1 className="mb-7.5 text-4xl text-center text-[#343a40]">
        My Bucket List
      </h1>
      <h2 className="mt-4 text-[#868e96] text-right text-xl">
        현재: {year}년 {month}월 {date}일 {week[day]}요일
      </h2>
      <p className="mt-4 text-[#0593d3] text-right text-xl font-medium">
        달성할 목표 3개 남음
      </p>
    </div>
  );
};

export default BucketHeader;
