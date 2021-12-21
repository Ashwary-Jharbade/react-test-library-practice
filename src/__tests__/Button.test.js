import { act, create } from "react-test-renderer";
import ButtonComp from "../components/Button";

test("Testing if ButtonComp component rendered", () => {
  const buttonComponent = create(<ButtonComp />);
  const tree = buttonComponent.toJSON();
  expect(tree).toBeTruthy();
});

test("Testing if ButtonComp component rendered with Click prop", () => {
  const buttonComponent = create(<ButtonComp label="Click" />);
  const tree = buttonComponent.toJSON();
  const { props } = buttonComponent.root;
  expect(tree).toBeTruthy();
  expect(props.label).toBe("Click");
});

describe("Button compoenent testing", () => {
  test("Testing data change on button click", () => {
    const buttonComponent = create(<ButtonComp label="Click" />);
    const { root } = buttonComponent;
    const buttonInstance = root.findByProps({ "data-testId": "btn1" });
    expect(root.props.label).toBe("Click");
    act(() => {
      buttonInstance.props.onClick();
    });
    expect(buttonInstance.props.children).toBe("Changed");
    expect(buttonComponent.toJSON()).toMatchSnapshot();
  });

  test("Testing for specific button", () => {
    const buttonComponent = create(<ButtonComp label="Click" />);
    const instance = buttonComponent.root;
    const buttonInstance = instance.findByProps({ "data-testId": "btn2" });
    expect(buttonInstance.props.children).toBe("Click");
    expect(buttonComponent.toJSON()).toMatchSnapshot();
  });
});
