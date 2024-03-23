import React from 'react';
import Card from '../components/Card';

function HomePage() {
  return (
    <div>
      <h1 >Welcome to our Website!</h1>
      <Card
        title="Featured Item"
        imageUrl="https://example.com/featured.jpg"
        description="No featured items yet.. click on about to know us and feel free to contact us."
      />
    </div>
  );
}

export default HomePage;
