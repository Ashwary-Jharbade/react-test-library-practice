import { create } from "react-test-renderer";
import ButtonComp from "../components/Button";

test("Testing if ButtonComp component rendered", () => {
  const buttonComponent = create(<ButtonComp />);
  const tree = buttonComponent.toJSON();
  expect(tree).toBeTruthy();
});

test("Testing if ButtonComp component rendered with Click prop", () => {
  const buttonComponent = create(<ButtonComp label="Click" />);
  const tree = buttonComponent.toJSON();
  const { props } = tree;
  expect(props).toBeTruthy();
  expect(props.value).toBe("Click");
});
