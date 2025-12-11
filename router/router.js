import { createBrowserRouter } from "react-router";
import MainLayout from "../src/layouts/main-layout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                lazy: {
                    Component: async() =>{
                        const component = await import("../src/pages/predict-diabetes/predict-diabetes-page")
                        return component.default
                    }
                }
            },
            {
                path: "/predict-rps",
                lazy: {
                    Component: async() =>{
                        const component = await import("../src/pages/rps/rps-page")
                        return component.default
                    }
                }
            }
        ]
    },
]);
export default router;