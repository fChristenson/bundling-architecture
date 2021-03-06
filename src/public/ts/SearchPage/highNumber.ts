// By moving our logic outside of our component we can test it in isolation.
// This helps with test execution speed.
export const makeHighNumber = (
  alert: (...vals: any) => void,
  setNumber: (n: number) => void
) => (e: any) => {
  const n = parseInt(e.target.value);
  if (n > 10_00) alert("High number");
  setNumber(n);
};
