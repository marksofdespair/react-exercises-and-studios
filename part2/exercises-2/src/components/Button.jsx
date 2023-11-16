import './styles.css';

function Button() {

   function onLearnMore() {
      alert("Dive in!");
   }

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;