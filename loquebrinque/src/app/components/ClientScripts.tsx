'use client';

import { useEffect } from 'react';
import Glide from '@glidejs/glide';

const ClientScripts = () => {
  useEffect(() => {
    // Glide.js initialization
    const glideElement = document.querySelector('.brinquedo');
    if (glideElement) {
      new Glide('.brinquedo', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 3000,
        hoverpause: true,
        animationDuration: 800,
        animationTimingFunc: 'ease-in-out'
      }).mount();
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                const offset = 100;
                window.scrollTo({
                    top: (target as HTMLElement).offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        }
      });
    });

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const closeMenu = document.querySelector('.close-menu');
    const navMenu = document.querySelector('nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    if (closeMenu && navMenu) {
        closeMenu.addEventListener('click', function() {
            navMenu.classList.remove('show');
        });
    }

  }, []);

  return null;
};

export default ClientScripts;
