import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Invoice = () => {
    const location = useLocation();
  const navigation = useNavigate();

  console.log(location);

  useEffect(() => {
    const redirectToUsers = () => {
      navigation("/invoices");
    };

    if (location.state === null) {
      redirectToUsers();
    }
  }, [location.state, navigation]);
  return (
    <div>
        <p>{location.state.price}</p>
        <p>{location.state.from}</p>
        <p>{location.state.to}</p>
        <p>{location.state.date}</p>
    </div>
  )
}

export default Invoice