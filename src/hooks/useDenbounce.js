import AwesomeDebouncePromise from "awesome-debounce-promise";


const debounceAction = (actionFunc, delay) =>
  AwesomeDebouncePromise(actionFunc, delay);

function useDebounce(func, delay) {
  const debouncedFunction = useMemo(() => debounceAction(func, delay), [
    delay,
    func,
  ]);

  return debouncedFunction;
}