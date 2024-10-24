import { Button } from "@mui/material";

interface IProps {
    title: string,
    time: string,
    pictureUrl: string,
}

export default function BookingCard({title, time, pictureUrl}: IProps) {

    return (
        <div className="row" style={{
            marginBottom: 24
            }}>
            <div className="col-md-3"></div>

            <div className="col-md-6" style={{
                background: '#61916b',
                padding: '3em',
            }}>
                <div className="row">
                    <div className="col-md-6" style={{
                        justifyItems: 'center'
                    }}>
                        <img src={pictureUrl} style={{ display: 'block', height: 400 }} />
                    </div>
                    <div className="col-md-6" style={{ position: 'relative' }}>
                        <span style={{
                            fontSize: '3.5em',
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                            {title}
                        </span>
                        <hr style={{ backgroundColor: '#1f472d', borderWidth: 0, height: 3 }} />
                        <span style={{
                            color: '#fff',
                            fontSize: '2em'
                        }}>
                            {time}
                        </span>
                        <span style={{
                            display: 'block',
                            color: 'white',
                            fontSize: '1.5rem',
                            marginTop: 24
                        }}>
                            Basic explanation of this service to give a little added detail
                        </span>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            // border: '1px solid black'
                        }}>
                            <Button variant="contained" size="large" sx={{
                                width: '45%',
                                background: '#1f472d'
                            }}>
                                Book Appointment
                            </Button>
                            <Button variant="contained" size="large" sx={{
                                width: '45%',
                                background: '#1f472d'
                            }}>
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-3"></div>
        </div>
    )
}