import auth from './auth'
import error from './error'
import dashboard from './pages/dashboard'
import settings from './pages/settings'

export default {
  ...auth,
  error,
  settings,
  dashboard,

  action: {
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    edit: 'Edit',
    delete: 'Delete'
  },

  name: 'Name',
  email: 'Email',
  password: 'Password',
  termsLink: 'terms of use'
}
