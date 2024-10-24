import BookingList from "./BookingList";

export default function BookingsPage() {

    return (
        <div className="container-fluid" style={{
            backgroundImage: 'linear-gradient(#dde4b8, white)',
            minHeight: '95vh',
        }}>

            <div className="row">
                <span style={{
                    display: 'block',
                    fontSize: '4.5rem',
                    color: '#1f472d',
                    textAlign: 'center',
                    padding: '48px',
                    fontStyle: 'italic',
                    fontWeight: 'bold'
                }}>Our Services</span>
            </div>

            <BookingList />

        </div>
    )
}