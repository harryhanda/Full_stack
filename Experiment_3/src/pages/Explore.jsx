import { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { Typography, Container } from '@mui/material';

const images = [
  '/paris.jpg',
  '/bali.jpg',
  '/london.jpg',
  '/japan.jpg',
  '/maldives.jpg',
  '/newyork.jpg',
  '/amritsar.jpg',
  '/germany.jpg',
  '/turkey.jpg',
];

const destinations = [
  'Paris',
  'Bali',
  'London',
  'Japan',
  'Maldives',
  'New York',
  'Amritsar',
  'Germany',
  'Turkey',
];

const heights = [200, 100, 150, 130, 170, 200, 180, 140, 120, 150, 160, 200, 100, 120, 140];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(0),
  textAlign: 'center',
  overflow: 'hidden',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  '&:hover': {
    transform: 'scale(1.05) translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.25)',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.4s ease',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
}));

export default function Explore() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardClick = (index) => {
    const destination = destinations[index % destinations.length];
    alert(`You selected: ${destination}! 🌍`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: 6,
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Explore Destinations 🌍
      </Typography>

      <Box sx={{ width: '100%' }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
          {heights.map((height, index) => (
            <Box
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Item
                sx={{ height }}
                onClick={() => handleCardClick(index)}
              >
                <img
                  src={images[index % images.length]}
                  alt={`Destination ${index + 1}`}
                  loading="lazy"
                />
                {hoveredIndex === index && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: '#fff',
                      padding: 1.5,
                      animation: 'slideUp 0.3s ease',
                      '@keyframes slideUp': {
                        from: { transform: 'translateY(100%)', opacity: 0 },
                        to: { transform: 'translateY(0)', opacity: 1 },
                      },
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      {destinations[index % destinations.length]}
                    </Typography>
                  </Box>
                )}
              </Item>
            </Box>
          ))}
        </Masonry>
      </Box>
    </Container>
  );
}
