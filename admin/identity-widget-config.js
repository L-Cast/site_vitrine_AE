// Vérifiez si Netlify Identity est disponible
if (typeof window !== 'undefined' && window.NetlifyIdentity) {
  // Initialisation de Netlify Identity
  window.NetlifyIdentity.init();

  // Vous pouvez également écouter certains événements
  window.NetlifyIdentity.on('login', user => {
    console.log('User logged in:', user);
    // Vous pouvez rediriger l'utilisateur après la connexion, si nécessaire
    window.location.href = '/admin';  // Exemple : redirection vers la page admin
  });

  window.NetlifyIdentity.on('logout', () => {
    console.log('User logged out');
    // Vous pouvez rediriger l'utilisateur après la déconnexion, si nécessaire
    window.location.href = '/';  // Exemple : redirection vers la page d'accueil
  });

  // Autres événements possibles : 'init', 'open', 'close', etc.
  window.NetlifyIdentity.on('init', user => {
    if (user) {
      console.log('User already logged in:', user);
    } else {
      console.log('No user logged in');
    }
  });

  // Fonction pour ouvrir le widget de connexion
  window.NetlifyIdentity.open = function() {
    window.NetlifyIdentity.open();
  };
} else {
  console.error('Netlify Identity Widget is not available.');
}
