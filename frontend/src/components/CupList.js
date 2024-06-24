import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const CupList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersCollection = await firestore.collection('orders').orderBy('createdAt', 'desc').get();
      setOrders(ordersCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Shape: {order.shape}, Text: {order.text}, Description: {order.description}, Color: {order.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CupList;
