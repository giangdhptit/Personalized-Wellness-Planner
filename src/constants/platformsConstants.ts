type Platform = {
  value: string;
  sm: string;
  lg: string;
};

type Platforms = {
  google: Platform;
  jira: Platform;
};

const PLATFORMS: Platforms = {
  google: {
    value: 'GOOGLE',
    sm: 'google',
    lg: 'Google',
  },
  jira: {
    value: 'JIRA',
    sm: 'jira',
    lg: 'Jira',
  },
};

export default {
  PLATFORMS,
};
