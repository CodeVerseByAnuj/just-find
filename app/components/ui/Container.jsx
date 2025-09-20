import React from 'react';

export function Container({ children, className = '' }) {
  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({ children, gradient = false, className = '' }) {
  return (
    <section className={`${gradient ? 'bg-gradient-to-r from-primary to-primary-dark' : ''} py-12 ${className}`}>
      {children}
    </section>
  );
}

export default { Container, Section };