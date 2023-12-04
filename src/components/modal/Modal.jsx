import { useDispatch } from "react-redux";
import { closeModal } from "../../reducers/modalSlice";
import { dailyTrack } from "../../reducers/habitSlice";
import "./Modal.css";

export const Modal = () => {
const dispatch = useDispatch();

  return (
    <aside className="modalContainer">
        <div className="modal">
        <p>Input your progress:</p>

        <button 
        className="mainBtn"
        onClick={() => {
            dispatch(closeModal());
        }}>
            Green
        </button>
        
        <button 
        className="setHabitBtn"
        onClick={() => {
            dispatch(closeModal());
        }}>
            Red
        </button>
        </div>
    </aside>
  )
}
