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
    save: 'Enregistrer',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    edit: 'Modifier',
    delete: 'Supprimer'
  },

  name: 'Nom',
  email: 'Email',
  password: 'Mot de passe',
  termsLink: 'conditions d\'utilisation'
}
