import React, { useState } from 'react';
import './App.css';

const planets = [
  {
    id: 1,
    name: 'Mercury',
    diameter: '4,879 km',
    distance: '57.9 million km',
    moons: 0,
    type: 'Terrestrial',
    color: '#8c7853',
    description: 'The smallest planet and closest to the Sun. Mercury has extreme temperature fluctuations.',
    temperature: '430°C (day) / -180°C (night)',
    dayLength: '59 Earth days',
  },
  {
    id: 2,
    name: 'Venus',
    diameter: '12,104 km',
    distance: '108.2 million km',
    moons: 0,
    type: 'Terrestrial',
    color: '#ffc649',
    description: 'The hottest planet with a thick toxic atmosphere. It rotates backwards relative to most planets.',
    temperature: '465°C',
    dayLength: '243 Earth days',
  },
  {
    id: 3,
    name: 'Earth',
    diameter: '12,742 km',
    distance: '149.6 million km',
    moons: 1,
    type: 'Terrestrial',
    color: '#4a90e2',
    description: 'Our home planet. The only known planet to harbor life with liquid water on its surface.',
    temperature: '15°C (average)',
    dayLength: '24 hours',
  },
  {
    id: 4,
    name: 'Mars',
    diameter: '6,779 km',
    distance: '227.9 million km',
    moons: 2,
    type: 'Terrestrial',
    color: '#e27b58',
    description: 'The Red Planet. Known for its rusty surface and polar ice caps. Subject of intense exploration.',
    temperature: '-65°C (average)',
    dayLength: '24.6 hours',
  },
  {
    id: 5,
    name: 'Jupiter',
    diameter: '139,820 km',
    distance: '778.5 million km',
    moons: 95,
    type: 'Gas Giant',
    color: '#c88b3a',
    description: 'The largest planet with a Great Red Spot storm. A gas giant with many moons and faint rings.',
    temperature: '-110°C (cloud top)',
    dayLength: '10 hours',
  },
  {
    id: 6,
    name: 'Saturn',
    diameter: '116,460 km',
    distance: '1.43 billion km',
    moons: 146,
    type: 'Gas Giant',
    color: '#f4d47f',
    description: 'Famous for its spectacular ring system. A gas giant with the most moons in our solar system.',
    temperature: '-140°C (cloud top)',
    dayLength: '10.7 hours',
  },
  {
    id: 7,
    name: 'Uranus',
    diameter: '50,724 km',
    distance: '2.87 billion km',
    moons: 27,
    type: 'Ice Giant',
    color: '#4fd0e7',
    description: 'An ice giant that rotates on its side. It has a faint ring system and extreme methane winds.',
    temperature: '-195°C',
    dayLength: '17 hours',
  },
  {
    id: 8,
    name: 'Neptune',
    diameter: '49,244 km',
    distance: '4.50 billion km',
    moons: 16,
    type: 'Ice Giant',
    color: '#4166f5',
    description: 'The windiest planet in our solar system. An ice giant with deep blue coloring from methane.',
    temperature: '-200°C',
    dayLength: '16 hours',
  },
];

function PlanetCard({ planet, isSelected, onClick }) {
  return (
    <div
      className={`planet-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div
        className="planet-visual"
        style={{
          backgroundColor: planet.color,
          boxShadow: `0 0 30px ${planet.color}`,
        }}
      >
        <span className="planet-size">{planet.type}</span>
      </div>
      <h3>{planet.name}</h3>
      <p className="planet-distance">{planet.distance} from Sun</p>
    </div>
  );
}

function PlanetDetails({ planet }) {
  return (
    <div className="planet-details">
      <div className="details-header">
        <div
          className="detail-planet-visual"
          style={{
            backgroundColor: planet.color,
            boxShadow: `0 0 50px ${planet.color}`,
          }}
        ></div>
        <div className="details-title">
          <h2>{planet.name}</h2>
          <p className="planet-type">{planet.type}</p>
        </div>
      </div>

      <p className="description">{planet.description}</p>

      <div className="details-grid">
        <div className="detail-item">
          <span className="detail-label">Diameter</span>
          <span className="detail-value">{planet.diameter}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Distance from Sun</span>
          <span className="detail-value">{planet.distance}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Moons</span>
          <span className="detail-value">{planet.moons}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Surface Temperature</span>
          <span className="detail-value">{planet.temperature}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Day Length</span>
          <span className="detail-value">{planet.dayLength}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Planet Type</span>
          <span className="detail-value">{planet.type}</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[2]); // Earth by default

  return (
    <div className="App">
      <header className="app-header">
        <h1>🌍 Solar System Explorer</h1>
        <p>Discover the planets in our solar system</p>
      </header>

      <div className="container">
        <div className="planets-grid">
          {planets.map((planet) => (
            <PlanetCard
              key={planet.id}
              planet={planet}
              isSelected={selectedPlanet.id === planet.id}
              onClick={() => setSelectedPlanet(planet)}
            />
          ))}
        </div>

        {selectedPlanet && <PlanetDetails planet={selectedPlanet} />}
      </div>
    </div>
  );
}

export default App;
