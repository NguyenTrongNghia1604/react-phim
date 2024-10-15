import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { pulicbRouter } from './Router';
import MainLayout from './Layout/MainLayout';
export default function App() {
    return (
        <div className="App">
            <Router>
                <div className="wrapper-main">
                    <Routes>
                        {pulicbRouter.map((item, index) => {
                            let Page = item.comment;
                            let Layout = MainLayout;
                            if (item.Layout) {
                                Layout = item.Layout;
                            }
                            return (
                                <Route
                                    path={item.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                    key={index}
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </div>
    );
}
