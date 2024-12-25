// import React, { createContext, useEffect, useState } from "react";

// export const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   // Initialize wishlist state with data from localStorage (if available)
//   const [wishlist, setWishlist] = useState(() => {
//     const storedWishlist = localStorage.getItem("wishlist");
//     return storedWishlist ? JSON.parse(storedWishlist) : [];
//   });

//   // Save wishlist to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   // Function to add an item to the wishlist
//   const addToWishlist = (item) => {
//     setWishlist((prev) => [...prev, item]);
//   };

//   // Function to remove an item from the wishlist
//   const removeFromWishlist = (id) => {
//     setWishlist((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };






// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);

//   // Fetch wishlist data from db.json on initial render
//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const response = await axios.get("https://frontlineserver.onrender.com/wishlist");
//         setWishlist(response.data);
//       } catch (error) {
//         console.error("Error fetching wishlist:", error);
//       }
//     };
//     fetchWishlist();
//   }, []);

//   // Function to add an item to the wishlist
//   const addToWishlist = async (item) => {
//     try {
//       const response = await axios.post("https://frontlineserver.onrender.com/wishlist", item);
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

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };






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





import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  // Ensure the user is logged in
  if (!userId) {
    console.error("User not logged in or missing user ID");
  }

  // Fetch the user's wishlist on initial render
  useEffect(() => {
    if (!userId) {
      console.error("User not logged in or missing user ID");
      return;
    }

    const fetchWishlist = async () => {
      try {
        const response = await axios.get(
          `https://frontlineserver.onrender.com/users/${userId}`
        );

        // Ensure the wishlist is set even if the backend returns an empty array
        setWishlist(response.data.wishlist || []);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishlist();
  }, [userId]);

  // Function to update the wishlist in the backend
  const updateWishlistInServer = async (updatedWishlist) => {
    if (!userId) return;

    try {
      await axios.patch(`https://frontlineserver.onrender.com/users/${userId}`, {
        wishlist: updatedWishlist,
      });
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  // Function to add an item to the wishlist
  const addToWishlist = async (item) => {
    if (!userId) return;

    const updatedWishlist = [...wishlist, item];
    setWishlist(updatedWishlist);

    // Save the updated wishlist to the server
    await updateWishlistInServer(updatedWishlist);
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = async (id) => {
    if (!userId) return;

    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);

    // Save the updated wishlist to the server
    await updateWishlistInServer(updatedWishlist);
  };

  // Function to clear the wishlist
  const clearWishlist = async () => {
    if (!userId) return;

    setWishlist([]);
    await updateWishlistInServer([]);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
