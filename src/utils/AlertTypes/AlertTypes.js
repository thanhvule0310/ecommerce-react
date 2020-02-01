const alertTypes = {
  signIn: {
    success: { type: 'success', message: 'Sign In success.' },
    error: { type: 'error', message: 'Username or password is incorrect.' },
  },
  signUp: {
    success: { type: 'success', message: 'Sign Up success.' },
    error: { type: 'error', message: 'Sign Up Failed,check your network.' },
  },
  signOut: {
    success: { type: 'success', message: 'Sign Out success.' },
    error: { type: 'error', message: 'Sign Out Failed,check your network.' },
  },
};

export default alertTypes;
