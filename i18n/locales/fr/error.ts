export default {
  server: 'Erreur serveur, veuillez réessayer plus tard.',
  required: 'Ce champ est requis.',
  auth: {
    register: {
      failed: 'Échec de l\'inscription',
      user: {
        exists: 'Un utilisateur avec cet email existe déjà.'
      },
      password: {
        mismatch: 'Les mots de passe ne correspondent pas.',
        short: 'Le mot de passe doit contenir au moins 8 caractères.',
        uppercase: 'Le mot de passe doit contenir au moins une majuscule.',
        lowercase: 'Le mot de passe doit contenir au moins une minuscule.',
        digit: 'Le mot de passe doit contenir au moins un chiffre.',
        space: 'Le mot de passe ne doit pas contenir d\'espace.',
        special: 'Le mot de passe doit contenir au moins un caractère spécial.'
      },
      name: {
        short: 'Le nom doit contenir au moins 3 caractères.'
      }
    },
    login: {
      failed: 'Échec de la connexion',
      notFound: 'Utilisateur introuvable.',
      password: {
        invalid: 'Mot de passe incorrect.'
      }
    },
    email: {
      invalid: 'L\'adresse e-mail n\'est pas valide.'
    }
  },
  settings: {
    profile: {
      noChanges: {
        title: 'Aucune modification détectée',
        description: 'Vous n\'avez apporté aucun changement à votre profil.'
      }
    }
  }
}
