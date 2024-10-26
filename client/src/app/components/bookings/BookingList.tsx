import { Tab, Tabs } from "@mui/material";
import BookingCard from "./BookingCard";
import { useState } from "react";

const individualSessions = [
    { title: 'Clarity Session', time: '45 min.', pictureUrl: 'images/clarity-session.webp' },
    { title: 'Breathing Session', time: '1 hr.', pictureUrl: 'images/wellness-coaching-session.webp' }
]

const coachingPrograms = [
    { title: 'Wellness Package', time: '24 sessions', pictureUrl: 'images/clarity-session.webp' },
    { title: 'Planting the Seed', time: '12 sessions', pictureUrl: 'images/wellness-coaching-session.webp' }
]

export default function BookingList() {

    const [ tabValue, setTabValue ] = useState<number>(0);

    function handleTabChange(event: React.SyntheticEvent, newValue: number) {
        setTabValue(newValue);
    }

    return (
        <>
            <Tabs centered value={tabValue} onChange={handleTabChange} variant="standard" sx={{
                mb: 4,
            }}>
                <Tab label='Individual Sessions' tabIndex={0} />
                <Tab label='Coachinng Programs' tabIndex={1} />
            </Tabs>

            <TabPanel index={0} value={tabValue}>
                { individualSessions.map(({ title, time, pictureUrl }) => (
                    <BookingCard title={title} time={time} pictureUrl={pictureUrl} background="#45694c" />
                )) }
            </TabPanel>
            <TabPanel index={1} value={tabValue}>
                { coachingPrograms.map(({ title, time, pictureUrl }) => (
                    <BookingCard title={title} time={time} pictureUrl={pictureUrl} background="#61916b" />
                )) }
            </TabPanel>

            
        </>
    )
}

interface IProps {
    children: React.ReactNode,
    value: number,
    index: number,
}

function TabPanel({children, value, index}: IProps) {

    return (
        <div
            hidden={value != index}
        >
            {children}
        </div>
    )
}
