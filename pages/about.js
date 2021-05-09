import React from 'react';
import Link from 'next/link'
import Layout from '@/components/Layout.js'

const about = () => {
    return (
        <Layout title='About page'>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error porro possimus suscipit sit culpa facilis cumque.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <Link href="/">Home Page</Link>
        </Layout>
    );
}

export default about;
