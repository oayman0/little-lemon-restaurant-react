import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';


function BookingForm() {
    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedNumber, setSelectedNumber] = useState(1);
    const [selectedOccasion, setSelectedOccasion] = useState('');

    const updateTimes = (state, action) => {
        return action.availableTimes;
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAPI(selectedDate.toISOString().split('T')[0]);
                dispatch({ availableTimes: data || [] });
            } catch (error) {
                dispatch({ availableTimes: ["No available times"] });
                console.error(error.message);
            }
        };

        fetchData(); // Fetch data on component mount
    }, [selectedDate]); // Fetch data whenever selectedDate changes

    const handleDateChange = (e) => {
        const newDate = new Date(e.target.value);
        setSelectedDate(newDate);
    }

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value)
    }
    const handleNumberChange = (e) => {
        setSelectedNumber(e.target.value)
    }
    const handleOccasionChange = (e) => {
        setSelectedOccasion(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Prepare form data
            const formData = {
                date: selectedDate.toISOString().split('T')[0],
                time: selectedTime,
                number: selectedNumber,
                occasion: selectedOccasion,
            };

            // Submit form data using submitAPI
            const success = await submitAPI(formData);

            if (success) {
                // Handle successful submission, e.g., navigate to ConfirmedBookingPage
                navigate('/success');
            } else {
                // Handle other cases if needed
                console.log('Form submission failed.');
            }
        } catch (error) {
            console.error(error.message);
            // Handle submission error, e.g., show an error message to the user
        }
    };


    return (
        <>
            <div className="booking">
                <form className="booking-form" onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date"
                        value={selectedDate.toISOString().split('T')[0]}
                        onChange={handleDateChange}
                        id="res-date" />
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time"
                        value={selectedTime}
                        onChange={handleTimeChange}
                    >
                        {availableTimes.map((option, index) => {
                            return <option key={index} value={option}>{option}</option>
                        })
                        }
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10"
                        id="guests" value={selectedNumber} onChange={handleNumberChange} />
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion"
                        value={selectedOccasion}
                        onChange={handleOccasionChange}>
                        <option value='birthday'>Birthday</option>
                        <option value='anniversary'>Anniversary</option>
                    </select>
                    <button type="submit" >Make Your reservation</button>
                </form>
            </div>
        </>
    )
}
export default BookingForm;