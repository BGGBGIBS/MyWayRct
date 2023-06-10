import Home from '/src/components/home/home';
import CV from '/src/containers/cv/cv';
import About from '/src/containers/about/about';
import In from '/src/components/in/in/in';

export const Routes = [
    {
        path: "/",
        exact: true,
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/cv",
        element: <CV />
    },
    {
        path: "/in",
        element: <In />
    }
];
