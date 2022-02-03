import React, { useEffect, useRef, useState } from "react";
import Cocktail from "../components/Cocktail";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";

const CocktailList = () => {
  const { user } = useAuthContext();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const ref = collection(db, "favorites");
    const q = query(ref, where("uid", "==", user.uid));

    getDocs(q).then((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setFavorites(results);
    });
  }, []);

  // if (favorites.length < 1) {
  //   return (
  //     <h1 className="section-title">
  //       Sorry, you don't have any cocktails saved!
  //     </h1>
  //   );
  // }

  return (
    <section className="section">
      <h2 className="section-title">Your Favorites</h2>
      <div className="cocktails-center">
        {favorites.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
