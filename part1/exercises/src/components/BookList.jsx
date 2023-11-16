export default function BookList() {
   let pageTitle = "Good Reads!";
   let book1 = "https://m.media-amazon.com/images/I/71gNzw663DL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71-8PDDqdkL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/81X16F1lH-L._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Warrior Cats: Into The Wild, series by Erin Hunter" />
         <img src={book2} alt="Warrior Cats: A New Prophecy, series by Erin Hunter" />
         <img src={book3} alt="Warrior Cats: Power of Three, series by Erin Hunter" />
      </div>      
   );
}