import React, { useEffect, useState } from "react";
import "./Contracts.css";
import Contact from "../Contract";
import data from "../data/list_contacts";

const Contracts = () => {

   const [contacts, setContacts] = useState(data);
   const [man, setMan] = useState(true);
   const [woman, setWoman] = useState(true);
   const [dog, setDog] = useState(true);
   const [search, setSearch] = useState("");


   function changeMan(params) {
      return setMan(params.target.checked);
   }

   function changeWoman(params) {
      return setWoman(params.target.checked);
   }

   function changeDog(params) {
      return setDog(params.target.checked);
   }

   function handleSearchChange(params) {
      return setSearch(params.target.value);
   }


   useEffect(() => {
      let massContacts = [];
      data.map((el) => {
         if (el.gender === "male" && man === true) {
            return massContacts.push(el);
         } else if (el.gender === "female" && woman === true) {
            return massContacts.push(el);
         } else if (el.gender === undefined && dog === true) {
            return massContacts.push(el);
         }
      });
      setContacts(massContacts);
   }, [man, woman, dog]);

   function resultSearch(params) {
      const dataSearch = params.filter((el) => {
         if (
            el.firstName.toLowerCase().includes(search.toLowerCase()) ||
            el.lastName.toLowerCase().includes(search.toLowerCase()) ||
            el.phone.toString().includes(search.toString())
         ) {
            return el;
         }
      });
      return dataSearch;
   }


   return (
      <div className="container">
         <div className="checkbox">
            <input type="checkbox" checked={man} onChange={changeMan} />
            <span>man</span>
            <input type="checkbox" checked={woman} onChange={changeWoman} />
            <span>woman</span>
            <input type="checkbox" checked={dog} onChange={changeDog} />
            <span>пес</span>
         </div>
         <div className="search">
            <input className="inputSearch" placeholder="Search contact" onChange={handleSearchChange} />
         </div>
         <div className="box">
            {resultSearch(contacts).map(el => < Contact {...el} key={Math.random()} />)}
         </div>
      </div>
   )
}

export default Contracts;