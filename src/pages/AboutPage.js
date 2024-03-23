import React from 'react';
import Card from '../components/Card';

function AboutPage() {
  return (
    <div class = "aboutpage">
      <h1>About Us</h1>
      <p>Here's some information about our team members : </p>
      <div class = "cards">
      <Card
        title="Dev Ruhela"
        imageUrl="https://example.com/team1.jpg"
        description="Proficiency in JavaScript and asynchronous programming concepts.
        Strong understanding of Node.js and its ecosystem, including npm, Express.js, and other frameworks.
        Experience with MongoDB, including schema design, query optimization, and aggregation pipelines."
      />
      <Card
        title="Raj Verma"
        imageUrl="https://example.com/team2.jpg"
        description="Strong understanding of React.js and its core principles.
        Experience with popular React libraries and frameworks such as React Router, Material-UI, or styled-components.Understanding of responsive design principles and CSS frameworks like Bootstrap."
      />
      <Card
        title="Harsh Deshmukh"
        imageUrl="https://example.com/team2.jpg"
        description="Developing user interfaces and web applications using HTML, CSS, and JavaScript.Writing clean, maintainable, and semantic HTML code to structure web content effectively."
      />
      </div>
    </div>
  );
}

export default AboutPage;
