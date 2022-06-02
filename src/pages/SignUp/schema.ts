import { z } from 'zod';

import C from 'constants';

const defaults = z.string().min(1, C.ERR_MSG_REQUIRED);
const passwordDefaults = defaults.regex(C.PASSW_VALID_REGEXP, C.ERR_MSG_PASSW);

export default z
  .object({
    userName: defaults,
    email: defaults.email(C.ERR_MSG_EMAIL),
    password: passwordDefaults,
    confirmPassword: passwordDefaults,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: C.ERR_MSG_MATCH,
    path: ['confirmPassword'],
  });
