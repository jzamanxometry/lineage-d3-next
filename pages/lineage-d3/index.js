import Head from 'next/head'
import schc from "./SCHC.json";
import vcit from "./VCIT.json";
import portfolio from "./portfolio.json";
import MultilineChart from "./MultilineChart";
import LineageCollapsible from "./LineageCollapsible"
import styles from '../../styles/LineageD3.module.css'

import React from "react";

const portfolioData = { name: "Portfolio", color: "#ffffff", items: portfolio };
const schcData = { name: "SCHC", color: "#d53e4f", items: schc };
const vcitData = { name: "VCIT", color: "#5e4fa2", items: vcit };
const dimensions = {
    width: 600,
    height: 300,
    margin: { top: 30, right: 30, bottom: 30, left: 60 }
};


export default function LineageD3() {
    return (
        <div >
            <Head>
                <title>Lineage D3</title>
                <meta name="description" content="Data Lineage for d3" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >
                <h1>
                    Data Lineage using D3
                </h1>
                <div className={styles.node} >

                    
                    
                    <LineageCollapsible />
                </div>


            </main>


        </div>
    )
}
