import { useSelector } from "react-redux";

const ShowText = () => {
  const value = useSelector((state) => state);

  const start = performance.now();
  while (performance.now() - start < 25) {}
  return <div>{value}</div>;
};

export default ShowText;
