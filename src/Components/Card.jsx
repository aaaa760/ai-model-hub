import React from 'react';

const ModelCard = ({ model }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.modelName}>{model.name}</span>
        <span style={styles.provider}>{model.provider} · {model.name}</span>
      </div>
      <div style={styles.body}>
        <span style={styles.description}>{model.description}</span>
      </div>
      <div style={styles.footer}>
        <span style={styles.usageCount}>{model.usageCount}</span>
       
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #e1e4e8',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  header: {
    borderBottom: '1px solid #e1e4e8',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  modelName: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  provider: {
    display: 'block',
    color: '#586069',
    fontSize: '14px',
  },
  body: {
    fontSize: '14px',
    color: '#586069',
  },
  footer: {
    borderTop: '1px solid #e1e4e8',
    paddingTop: '10px',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  usageCount: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  logo: {
    width: '24px',
    height: '24px',
  },
};

export default ModelCard;
