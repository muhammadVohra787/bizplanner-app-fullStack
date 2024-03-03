// import React, { useEffect, useState } from 'react';
// import useAuth  from 'react-auth-kit';

// const CheckTokenExpiration = () => {
//  const { getToken, isAuthenticated } = useAuth();
//  const [tokenExpired, setTokenExpired] = useState(false);

//  useEffect(() => {
//     const checkToken = async () => {
//       if (isAuthenticated()) {
//         const token = await getToken();
//         // Assuming your token includes an expiration timestamp
//         const expirationTime = new Date(token.exp * 1000); // Convert to milliseconds
//         const currentTime = new Date();

//         if (currentTime > expirationTime) {
//           setTokenExpired(true);
//           // Optionally, you can log the user out or refresh the token here
//         }
//       }
//     };

//     // Check the token every minute
//     const intervalId = setInterval(checkToken, 60000);

//     return () => clearInterval(intervalId);
//  }, [isAuthenticated, getToken]);

//  // Render nothing, just use the state to trigger re-renders
//  return null;
// };

// export default CheckTokenExpiration;
