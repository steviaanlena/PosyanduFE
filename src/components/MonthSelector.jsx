import '../css/MonthSelector.css'
import { useState } from 'react'


function MonthSelector() {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 8));

    const nextButton = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    }

    const prevButton = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    }

    const monthYear = currentDate.toLocaleString('id-ID', {
        month: 'long',
        year: 'numeric',
    })


  return (
    <>
        <div className='month-selector__container'>
            <button className='button' onClick={prevButton}>&lt;</button>
            <span className='month'>{monthYear.charAt(0).toUpperCase() + monthYear.slice(1)}</span>
            <button className='button' onClick={nextButton}>&gt;</button>
        </div>
    </>
  )
}

export default MonthSelector