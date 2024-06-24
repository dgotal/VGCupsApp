import React, { useState } from 'react';
import { firestore } from '../firebase';
import axios from 'axios';

const CupForm = () => {
  const [shape, setShape] = useState('');
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection('orders').add({
        shape,
        text,
        description,
        color,
        createdAt: new Date(),
      });

      // Send email
      axios.post('http://localhost:5000/send-email', {
        shape,
        text,
        description,
        color,
      });

      alert('Order submitted successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Order a Cup</h2>
      <input type="text" value={shape} onChange={(e) => setShape(e.target.value)} placeholder="Cup Shape" required />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Text on Cup" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Color" required />
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default CupForm;
