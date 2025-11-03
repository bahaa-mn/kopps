export default {
  title: 'Settings',
  general: {
    title: 'General',
    profile: {
      title: 'Profile',
      description: 'Edit my personal information'
    },
    toast: {
      success: {
        title: 'Success',
        description: 'Your information has been updated.'
      }
    }
  },
  security: {
    title: 'Security',
    password: {
      description: 'Confirm your current password before setting a new one.',
      current: {
        placeholder: 'Current password'
      },
      new: {
        placeholder: 'New password',
        error: {
          ducplicate: 'The new password must be different.'
        }
      },
      update: {
        label: 'Update'
      }
    },
    account: {
      title: 'Delete my account',
      description: 'Don\'t need your account anymore?\nYou can delete it here — this action is irreversible and all data linked to this account will be permanently removed.',
      delete: {
        label: 'Delete account',
        modal: {
          title: 'Delete account',
          description: 'Are you sure you want to delete your account?',
          body: 'All information linked to this account will be permanently removed.'
        }
      }
    }
  }
}
