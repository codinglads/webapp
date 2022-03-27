import './App.css'
import React from 'react';
import { Layout } from '../components/Layout';

function ErrorPage() {

    return (
        <Layout>
            <div class="error">404</div>
            <br /><br />
            <span class="info">Page not found</span>
            <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" class="static" />
        </Layout>

    )
}

export default ErrorPage