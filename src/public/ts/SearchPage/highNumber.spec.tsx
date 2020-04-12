import { makeHighNumber } from "./highNumber";

describe("SearchPageTest", () => {
  it("should alert if number is over 10 000", () => {
    const alert = jest.fn();
    const setNumber = jest.fn();
    const func = makeHighNumber(alert, setNumber);

    const event = { target: { value: "11000" } };
    func(event);

    expect(alert).toBeCalledTimes(1);
    expect(setNumber).toBeCalledTimes(1);
    expect(setNumber).toBeCalledWith(11000);
  });

  it("should not alert if number is under 10 000", () => {
    const alert = jest.fn();
    const setNumber = jest.fn();
    const func = makeHighNumber(alert, setNumber);

    const event = { target: { value: "20" } };
    func(event);

    expect(alert).toBeCalledTimes(0);
    expect(setNumber).toBeCalledTimes(1);
    expect(setNumber).toBeCalledWith(20);
  });

  it("should alert if number is 10 000", () => {
    const alert = jest.fn();
    const setNumber = jest.fn();
    const func = makeHighNumber(alert, setNumber);

    const event = { target: { value: "10000" } };
    func(event);

    expect(alert).toBeCalledTimes(1);
    expect(setNumber).toBeCalledTimes(1);
    expect(setNumber).toBeCalledWith(10000);
  });
});
