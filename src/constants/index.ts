export default {
  PASSW_VALID_REGEXP:
    /^(?=.*([A-Z]){1,})(?=.*[!@#$&*_]{1,})(?=.*[0-9]{1,})(?=.*[a-z]{1,}).{12,99}$/,

  ERR_MSG_REQUIRED: 'This field is required',
  ERR_MSG_EMAIL: 'Invalid email address format',
  ERR_MSG_PASSW: 'Wrong password (see note below)',
  ERR_MSG_MATCH: "Passwords don't match",

  NOTE: 'Password must have at least 1 uppercase and lowercase letter, 1 special character (!@#$&*_), 1 digit and length &gt; 11 characters.',
};
