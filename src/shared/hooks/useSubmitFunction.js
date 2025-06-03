import { useState } from "react";
import { useDispatch } from "react-redux";

const useSubmitFunction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const dispatch = useDispatch();

  const onSubmitFunction = async ({
    reduxFunction,
    data,
    onSuccess,
    onError,
  }) => {
    try {
      setIsLoading(true);
      const res = await dispatch(reduxFunction(data));
      if (onSuccess) onSuccess(res); // Call onSuccess callback after successful submission
      setSubmitError(null); // Reset submitError on successful submission
    } catch (err) {
      let errorObject = err?.response?.data || "An error occurred";
      setSubmitError(errorObject); // Set submitError with the error message
      if (onError) onError(errorObject); // Call onError callback in case of error
    } finally {
      setIsLoading(false); // Set isLoading to false after submission (whether success or error)
    }
  };

  return { isLoading, submitError, onSubmitFunction };
};

export default useSubmitFunction;
