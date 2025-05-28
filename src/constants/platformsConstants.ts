type Platform = {
  value: string;
  sm: string;
  lg: string;
};

type Platforms = {
  google: Platform;
};

const PLATFORMS: Platforms = {
  google: {
    value: 'GOOGLE',
    sm: 'google',
    lg: 'Google',
  },
};

export default {
  PLATFORMS,
};
