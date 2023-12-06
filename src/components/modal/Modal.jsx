
import { useSelector } from "react-redux";

export const Modal = () => {
  const habitEntries = useSelector(habitsList);
 

  return (
    <section>
      <h1>Oops....</h1>
      <p>Looks like you already have an entry for today. Please try again tomorrow</p>
    </section>
    
  )
};
