import React from 'react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <section>
      <h2>Landing Page</h2>
      <Link to='/BusinessSignUp'>I am a Business</Link>
      <br />
      <Link to='/VolunteerSignUp'>I am a Volunteer</Link>
    </section>
  );
}
