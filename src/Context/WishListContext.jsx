// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
  
//   // Replace this with logic to get the logged-in user's ID
//   const userId = "user1"; // Example: Assume the user is logged in as "user1"

//   // Fetch wishlist data for the specific user
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const response = await axios.get(
//           `https://frontlineserver.onrender.com/wishlist?userId=${userId}`
//         );
//         setWishlist(response.data);
//       } catch (error) {
//         console.error("Error fetching wishlist:", error);
//       }
//     };
//     fetchWishlist();
//   }, [userId]);

//   // Function to add an item to the wishlist
//   const addToWishlist = async (item) => {
//     try {
//       const newItem = { ...item, userId }; // Attach userId to the item
//       const response = await axios.post(
//         "https://frontlineserver.onrender.com/wishlist",
//         newItem
//       );
//       setWishlist((prev) => [...prev, response.data]);
//     } catch (error) {
//       console.error("Error adding to wishlist:", error);
//     }
//   };

//   // Function to remove an item from the wishlist
//   const removeFromWishlist = async (id) => {
//     try {
//       await axios.delete(`https://frontlineserver.onrender.com/wishlist/${id}`);
//       setWishlist((prev) => prev.filter((item) => item.id !== id));
//     } catch (error) {
//       console.error("Error removing from wishlist:", error);
//     }
//   };

//   // Function to remove all items from the wishlist
//   const clearWishlist = async () => {
//     try {
//       const response = await axios.get(
//         `https://frontlineserver.onrender.com/wishlist?userId=${userId}`
//       );
//       const deletePromises = response.data.map((item) =>
//         axios.delete(
//           `https://frontlineserver.onrender.com/wishlist/${item.id}`
//         )
//       );
//       await Promise.all(deletePromises);
//       setWishlist([]);
//     } catch (error) {
//       console.error("Error clearing wishlist:", error);
//     }
//   };

//   return (
//     <WishlistContext.Provider
//       value={{
//         wishlist,
//         addToWishlist,
//         removeFromWishlist,
//         clearWishlist,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };





// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const userId = user?.id;



//   // Ensure the user is logged in
//   if (!userId) {
//     console.error("User not logged in or missing user ID");
//   }

//   // Fetch the user's wishlist on initial render
//   useEffect(() => {
//     if (!userId) {
//       console.error("User not logged in or missing user ID");
//       return;
//     }

//     const fetchWishlist = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5224/api/Wishlist/GetWishlist/${userId}`
//         );

//         // Ensure the wishlist is set even if the backend returns an empty array
//         setWishlist(response.data.wishlist || []);
//       } catch (error) {
//         console.error("Error fetching wishlist:", error);
//       }
//     };

//     fetchWishlist();
//   }, [userId]);

//   // Function to update the wishlist in the backend
//   const updateWishlistInServer = async (updatedWishlist) => {
//     if (!userId) return;

//     try {
//       await axios.patch(`http://localhost:5224/api/Wishlist/UpdateWishlist/${userId}`, 
//         up
//       );
//     } catch (error) {
//       console.error("Error updating wishlist:", error.response || error.message);
//       if (error.response) {
//         console.error("Backend Error:", error.response.data);
//       }
//     }
//   };

//   // Function to add an item to the wishlist
//   const addToWishlist = async (item) => {
//     if (!userId) return;

//     const updatedWishlist = [...wishlist, item];
//     setWishlist(updatedWishlist);

//     // Save the updated wishlist to the server
//     await updateWishlistInServer(updatedWishlist);
//   };

//   // Function to remove an item from the wishlist
//   const removeFromWishlist = async (id) => {
//     if (!userId) return;

//     const updatedWishlist = wishlist.filter((item) => item.id !== id);
//     setWishlist(updatedWishlist);

//     // Save the updated wishlist to the server
//     await updateWishlistInServer(updatedWishlist);
//   };

//   // Function to clear the wishlist
//   const clearWishlist = async () => {
//     if (!userId) return;

//     setWishlist([]);
//     await updateWishlistInServer([]);
//   };

//   return (
//     <WishlistContext.Provider
//       value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };





// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const userId = user?.id;

//   // Ensure the user is logged in
//   if (!userId) {
//     console.error("User not logged in or missing user ID");
//   }

//   // Fetch the user's wishlist on initial render
//   useEffect(() => {
//     if (!userId) {
//       console.error("User not logged in or missing user ID");
//       return;
//     }

//     const fetchWishlist = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5224/api/Wishlist/${userId}`
//         );

//         // Ensure the wishlist is set even if the backend returns an empty array
//         setWishlist(response.data || []);
//       } catch (error) {
//         console.error("Error fetching wishlist:", error);
//       }
//     };

//     fetchWishlist();
//   }, [userId]);

//   // Function to update the wishlist in the backend
//   const updateWishlistInServer = async (updatedWishlist) => {
//     if (!userId) return;

//     try {
//       // Use PUT to replace the entire wishlist
//       await axios.put(
//         `http://localhost:5224/api/Wishlist/${userId}`,
//         { wishlist: updatedWishlist } // Ensure correct structure is sent
//       );
//     } catch (error) {
//       console.error("Error updating wishlist:", error.response || error.message);
//       if (error.response) {
//         console.error("Backend Error:", error.response.data);
//       }
//     }
//   };

//   // Function to add an item to the wishlist
//   const addToWishlist = async (item) => {
//     if (!userId) return;

//     const updatedWishlist = [...wishlist, item];
//     setWishlist(updatedWishlist);

//     // Save the updated wishlist to the server
//     await updateWishlistInServer(updatedWishlist);
//   };

//   // Function to remove an item from the wishlist
//   const removeFromWishlist = async (id) => {
//     if (!userId) return;

//     const updatedWishlist = wishlist.filter((item) => item.id !== id);
//     setWishlist(updatedWishlist);

//     // Save the updated wishlist to the server
//     await updateWishlistInServer(updatedWishlist);
//   };

//   // Function to clear the wishlist
//   const clearWishlist = async () => {
//     if (!userId) return;

//     setWishlist([]);
//     await updateWishlistInServer([]);
//   };

//   return (
//     <WishlistContext.Provider
//       value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };


import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  useEffect(() => {
    if (!userId) return;

    const fetchWishlist = async () => {
      try {
        const response = await axios.get(`http://localhost:5224/api/Wishlist/${userId}`);
        // Ensure wishlist items are set even if an empty array is returned
        setWishlist(response.data || []);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishlist();
  }, [userId]);

  const addToWishlist = async (item) => {
    if (!userId) return;
    try {
      const response = await axios.post(`http://localhost:5224/api/Wishlist/${userId}`, item);
      setWishlist((prev) => [...prev, response.data]); // Append the newly added item
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  const removeFromWishlist = async (id) => {
    if (!userId) return;
    try {
      await axios.delete(`http://localhost:5224/api/Wishlist/${userId}/${id}`);
      setWishlist((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
