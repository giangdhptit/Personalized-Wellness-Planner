import { createAction } from "@reduxjs/toolkit";
export const clearStore = createAction("util/clearStore");

import { showToastUtils } from "@/shared/utils/toast";

export const handleAsyncRequest = async ({
  dispatch,
  actions,
  requestFn,
  endpoint,
  payload,
  toastMessage = {
    success: { show: true, customMessage },
    error: { show: true, customMessage },
  },
}) => {
  try {
    await dispatch(actions.startLoading());
    await dispatch(actions.hasError(null));

    const body = { endpoint };

    if (payload) body.payload = payload;

    const response = await requestFn(body);

    if (toastMessage.success.show)
      showToastUtils({
        type: "success",
        message: toastMessage.success.customMessage || response.data.message,
      });

    return {
      statusCode: response.data.statusCode,
      message: response.data.message,
      body: response.data.body,
    };
  } catch (error) {
    dispatch(actions.hasError(error));
    const message = error.message || "Something went wrong";

    if (toastMessage.error.show)
      showToastUtils({
        type: "error",
        message: toastMessage.error.customMessage || message,
      });

    // If node server cookie is expired
    if (error?.err?.type === "INVALID_TOKEN") {
      dispatch(clearStore());
      window.location.href = "/auth/login";
    }

    return {
      statusCode: error.statusCode,
      message,
      error,
    };
  } finally {
    dispatch(actions.stopLoading());
  }
};
