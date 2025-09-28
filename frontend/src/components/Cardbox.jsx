import Card from 'react-bootstrap/Card';

function Cardbox({ props, props2 }) {
  return (
    <Card
      style={{
        width: '18rem',
        borderRadius: '15px',
        backgroundColor: '#f0f4f8',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        padding: '20px',
        margin: '10px',
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
          {props}
        </Card.Title>
        {props2 && (
          <Card.Subtitle style={{ fontSize: '1.2rem', color: '#555', marginTop: '5px' }}>
            {props2}
          </Card.Subtitle>
        )}
      </Card.Body>
    </Card>
  );
}

export default Cardbox;
