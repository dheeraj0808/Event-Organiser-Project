import React, { useState, useRef } from 'react'
import './cta.css'

const Cta = () => {
    const [name, setName] = useState('')
    const [guests, setGuests] = useState('')
    const [date, setDate] = useState('')
    const [eventType, setEventType] = useState('wedding')
    const [estimate, setEstimate] = useState('')
    const dateInputRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()

        const guestCount = parseInt(guests, 10) || 0
        if (!guestCount || !date || !name.trim()) {
            setEstimate('Please fill all fields to see an estimate.')
            return
        }

        let basePerGuest = 2500
        if (eventType === 'corporate') basePerGuest = 1800
        if (eventType === 'social') basePerGuest = 2000

        const low = basePerGuest * guestCount
        const high = Math.round(low * 1.4)

        const format = value =>
            value.toLocaleString('en-IN', { maximumFractionDigits: 0 })

        setEstimate(
            `Estimated budget range: ₹${format(low)} - ₹${format(high)} (final quote after discussion).`
        )
    }

    const openDatePicker = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker?.()
            dateInputRef.current.focus()
        }
    }

    return (
        <section className="cta" id="contact">
            <div className="cta__inner">
                <p className="cta__eyebrow">Want to know your budget?</p>

                <h2 className="cta__title">Calculate your event budget in a few seconds.</h2>

                <p className="cta__body">
                    Enter a few quick details and get an instant rough estimate. We’ll fine-tune everything on
                    a personalised call.
                </p>

                <form className="cta__form" onSubmit={handleSubmit}>
                    <div className="cta__field">
                        <input
                            type="text"
                            className="cta__input"
                            placeholder="Your Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className="cta__field cta__field--select">
                        <select
                            className="cta__select"
                            value={eventType}
                            onChange={e => setEventType(e.target.value)}
                        >
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="social">Social / Private Party</option>
                        </select>
                    </div>

                    <div className="cta__field">
                        <input
                            type="number"
                            min="1"
                            className="cta__input"
                            placeholder="No. of Guests"
                            value={guests}
                            onChange={e => setGuests(e.target.value)}
                        />
                    </div>

                    <div className="cta__field cta__field--date">
                        <input
                            type="date"
                            ref={dateInputRef}
                            className="cta__input cta__input--date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                        <button
                            type="button"
                            className="cta__date-icon"
                            onClick={openDatePicker}
                            aria-label="Open date picker"
                        >
                            📅
                        </button>
                    </div>

                    <button type="submit" className="cta__btn cta__btn--primary">
                        Calculate Now
                    </button>
                </form>

                {estimate && <p className="cta__estimate">{estimate}</p>}
            </div>
        </section>
    )
}

export default Cta