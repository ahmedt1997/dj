import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({title,keywords,desciption,children}) => {
 
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desciption} />
                <meta name="keywords" content={keywords} />
            </Head>

            <Header />

            <div className={styles.container}>
                {children}
            </div>

        <Footer />
        </div>
    );

  
}

Layout.defaultProps = {
    title: 'Dj Evenents | search for what you want' ,
    desciption: 'find all the leatest art that maybe you will like ',
    keywords:'music , events , dj'

  };


export default Layout;
