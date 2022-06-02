import { z } from 'zod';

import C from 'constants';

const defaults = z.string().min(1, C.ERR_MSG_REQUIRED);

export default z.object({
  email: defaults.email(C.ERR_MSG_EMAIL),
  password: defaults.regex(C.PASSW_VALID_REGEXP, C.ERR_MSG_PASSW),
});
