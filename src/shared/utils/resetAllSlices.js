import { actions as userActions } from "@/shared/redux/slices/user";

export const resetAllSlices = () => (dispatch) => {
  [userActions].forEach((action) => dispatch(action.resetState()));
};
