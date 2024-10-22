import { createBrowserRouter } from "react-router-dom";
import App from "../app/layout/App";
import Home from "../app/components/home/Home";
import Services from "../app/components/services/Services";
import About from "../app/components/about/About";
import BookAppointment from "../app/components/bookings/BookAppointment";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'services', element: <Services /> },
            { path: 'book-appointment', element: <BookAppointment /> },
        ]
    }
])