import Head from 'next/head'
import schc from "./SCHC.json";
import vcit from "./VCIT.json";
import portfolio from "./portfolio.json";
import MultilineChart from "./MultilineChart";
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


export default function MultilineChartD3() {
    return (
        <div >
            <Head>
                <title>D3 Multiline Chart</title>
                <meta name="description" content="Data Lineage for d3" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >
                <h1>
                    Multiline Chart D3
                </h1>
                <div className={styles.LineageDiv} >
                    <MultilineChart
                        data={[portfolioData, vcitData, schcData]}
                        dimensions={dimensions}
                    />
                </div>
            </main>
        </div>
    )
}
