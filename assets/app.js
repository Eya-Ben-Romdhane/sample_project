import { registerReactControllerComponents } from '@symfony/ux-react';
import './bootstrap.js';
import './styles/app.css';

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */

// Affiche un message de bienvenue dans la console
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

// Enregistrement des composants React
const components = require.context('./react/controllers', true, /\.(j|t)sx?$/);
console.log('Components found:', components.keys()); // Affiche les composants trouvés
registerReactControllerComponents(components);

// Message de confirmation
console.log('Components registered successfully! 🎉');