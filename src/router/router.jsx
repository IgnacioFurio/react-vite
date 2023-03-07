import { createBrowserRouter } from "react-router-dom";

import { Saludo } from '../components/Saludo';
import { Persona } from '../components/Persona';

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Saludo/>
    },
    {
        path: "persona",
        element: <Persona/>
    },
]);