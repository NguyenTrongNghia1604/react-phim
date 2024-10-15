import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import Footer from '../Component/Footer';
export default function MainLayout({ children }) {
    return (
        <div className="main">
            <Header />
            <div className="wrapper" style={{ display: 'flex' }}>
                <Sidebar />
                {children}
            </div>
            <Footer />
        </div>
    );
}
