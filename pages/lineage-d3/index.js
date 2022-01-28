import React from "react";
import Head from 'next/head'

import treeData from "./selectstar-lineage.json";
import LineageCollapsible from "./LineageCollapsible"
import styles from '../../styles/LineageD3.module.css'


export default function LineageD3() {
    return (
        <div >
            <Head>
                <title>Lineage D3</title>
                <meta name="description" content="Data Lineage for d3" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>
                    Data Lineage using D3
                </h1>
                <div className={styles.node} >

                    
                    
                    <LineageCollapsible data={treeData} />
                </div>


            </main>


        </div>
    )
}
