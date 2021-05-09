import styles from '../styles/404.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'

const NotFound = () => {
    return (
        <Layout title='Page not Found'>
            <div className={styles.error}>
                <h1>404</h1>
                <h4>Sorry this page does not exsist anymore</h4>
                <Link href="/">Home Page</Link>
            </div>
            
        </Layout>
    );
}

export default NotFound;
