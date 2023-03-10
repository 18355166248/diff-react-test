import { Provider } from "react-redux";
import store from "./store";
import TextBox from "./components/TextBox";
import ShowText from "./components/ShowText";

export default function App() {
  return (
    <Provider store={store}>
      <TextBox />
      {Array(10)
        .fill("a")
        .map((item, index) => (
          <ShowText />
        ))}
    </Provider>
  );
}
