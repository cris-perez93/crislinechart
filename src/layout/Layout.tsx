import Header from "./components/Header";

interface LayoutProps {
    children: React.ReactNode;
    }
    

const Layout = ({ children }: LayoutProps) => {
    return (
        <main>
        <Header />
        {children}
        <footer>Footer</footer>
        </main>
    );
    }
    export default Layout;