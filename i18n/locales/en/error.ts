export default {
  server: 'Server error, please try again later.',
  required: 'This field is required.',
  auth: {
    register: {
      failed: 'Registration failed',
      user: {
        exists: 'A user with this email already exists.'
      },
      password: {
        mismatch: 'Passwords do not match.',
        short: 'Password must be at least 8 characters long.',
        uppercase: 'Password must contain at least one uppercase letter.',
        lowercase: 'Password must contain at least one lowercase letter.',
        digit: 'Password must contain at least one digit.',
        space: 'Password must not contain spaces.',
        special: 'Password must contain at least one special character.'
      },
      name: {
        short: 'Name must be at least 3 characters long.'
      }
    },
    login: {
      failed: 'Login failed',
      notFound: 'User not found.',
      password: {
        invalid: 'Invalid password.'
      }
    },
    email: {
      invalid: 'The email address is not valid.'
    }
  },
  settings: {
    profile: {
      noChanges: {
        title: 'No changes detected',
        description: 'You did not make any changes to your profile.'
      }
    }
  }
}
