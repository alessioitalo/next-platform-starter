'use client'

import { useEffect } from 'react';

export default function NetlifyIdentityHandler() {
  useEffect(() => {
    // This code only runs in the browser
    if (typeof window !== 'undefined' && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        // Handle login redirect
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin-ttzpubxivj/';
          });
        }
      });

      // Handle invite tokens separately after initialization
      if (window.location.hash && window.location.hash.startsWith('#invite_token=')) {
        // Redirect to admin page with the token
        const token = window.location.hash.replace('#invite_token=', '');
        document.location.href = `/admin-ttzpubxivj/#invite_token=${token}`;
      }
    }
  }, []);
  
  return null;
}