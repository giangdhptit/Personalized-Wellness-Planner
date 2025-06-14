import { toast } from "react-hot-toast";

export const showToastUtils = ({ type, message }) => {
  toast[type](message);
};
