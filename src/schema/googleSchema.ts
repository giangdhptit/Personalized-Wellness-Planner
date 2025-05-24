import * as Yup from 'yup';
import { validatorUtils } from '../utils';

const validateAuth = async (data: any) => {
  const schema = Yup.object({
    email: Yup.string().email().required('email is required'),
  });

  return await validatorUtils.validate(schema, data);
};

export default { validateAuth };
