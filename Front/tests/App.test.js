// tests/App.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Ajout de cette ligne
import App from '../src/app';
import '@testing-library/jest-dom';

// Test pour vérifier que le titre 'ChatBot Artists' est affiché
test('affiche le titre ChatBot Artists', () => {
  render(<App />);
  const linkElement = screen.getByText(/ChatBot Artists/i);
  expect(linkElement).toBeInTheDocument();
});

// Ajout des tests supplémentaires basés sur les descriptions précédentes

// Test pour vérifier la présence du bouton 'Search'
test('affiche le bouton Search', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Search/i });
  expect(buttonElement).toBeInTheDocument();
});

// Test pour vérifier la présence d'un champ de saisie pour les messages
test('affiche un champ de saisie pour les messages', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter a name/i);
  expect(inputElement).toBeInTheDocument();
});

// Test pour vérifier l'ajout d'un message dans la liste après envoi
test('ajoute un message dans la liste après envoi', async () => {
  render(<App />);
  // Simuler l'ajout d'un message
  const inputElement = screen.getByPlaceholderText(/Enter a name/i);
  const buttonElement = screen.getByRole('button', { name: /Search/i });

  // Simuler la saisie d'un message et son envoi
  userEvent.type(inputElement, 'Prince');
  userEvent.click(buttonElement);

    // Vérifier que les informations de l'artiste apparaissent
  // Utilisez waitFor pour attendre l'apparition des éléments asynchrones
  await waitFor(() => {
    const artistInfoElement = screen.getByText(/Prince/i);
    expect(artistInfoElement).toBeInTheDocument();
  });
});