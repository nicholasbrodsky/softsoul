import { createBrowserRouter } from "react-router-dom";
import App from "../app/layout/App";
import Home from "../app/components/home/Home";
import About from "../app/components/about/About";
import BookingsPage from "../app/components/bookings/BookingsPage";
import ServicesPage from "../app/components/services/ServicesPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'services', element: <ServicesPage /> },
            { path: 'book-appointment', element: <BookingsPage /> },
        ]
    }
])