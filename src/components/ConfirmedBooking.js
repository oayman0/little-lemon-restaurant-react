import { Link } from "react-router-dom";
const ConfirmedBooking = () => {
    return (
        <>
         <div className="success-booking">
                <p>
                Successful booking, thank you!
                </p>
                <Link to="/">
  <button aria-label="Return to Home">Return to Home</button>
</Link>
            </div>
        </>
    )
}
export default ConfirmedBooking;