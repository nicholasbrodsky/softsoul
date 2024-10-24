import BookingCard from "./BookingCard";

const bookings = [
    { title: 'Clarity Session', time: '45 min.', pictureUrl: 'images/clarity-session.webp' },
    { title: 'Wellness Coaching', time: '1 hr.', pictureUrl: 'images/wellness-coaching-session.webp' }
]

export default function BookingList() {

    return (
        <>
            { bookings.map(({ title, time, pictureUrl }) => (
                <BookingCard title={title} time={time} pictureUrl={pictureUrl} />
            )) }
        </>
    )
}
