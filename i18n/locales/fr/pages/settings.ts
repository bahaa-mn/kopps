export default {
  title: 'Paramètres',
  general: {
    title: 'Général',
    profile: {
      title: 'Profil',
      description: 'Modifier mes informations personnelles'
    },
    toast: {
      success: {
        title: 'Succès',
        description: 'Vos informations ont été mises à jour.'
      }
    }
  },
  security: {
    title: 'Sécurité',
    password: {
      description: 'Confirmez votre mot de passe actuel avant d\'en définir un nouveau.',
      current: {
        placeholder: 'Mot de passe actuel'
      },
      new: {
        placeholder: 'Nouveau mot de passe',
        error: {
          ducplicate: 'Les mots de passe doivent être différents.'
        }
      },
      update: {
        label: 'Mettre à jour'
      }
    },
    account: {
      title: 'Supprimer mon compte',
      description: 'Plus besoin de votre compte ?\nVous pouvez le supprimer ici, cette action est irréversible et toutes les informations liées à ce compte seront supprimées définitivement.',
      delete: {
        label: 'Supprimer le compte',
        modal: {
          title: 'Supprimer le compte',
          description: 'Êtes-vous sûr de vouloir supprimer votre compte ?',
          body: 'Toutes les informations liées à ce compte seront supprimées définitivement.'
        }
      }
    }
  }
}
