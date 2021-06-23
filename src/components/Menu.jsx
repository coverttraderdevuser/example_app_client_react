import React from 'react'
import './Menu.css'

const Menu = () => {
    return (
        <div>

<div className="navbar">
<ul id="nav">
        <li><a href="/">Data</a>
          <ul>
              <li><a href="/">Source »</a>
                <ul>
                <li><a href="/">Streaming (Kafka)</a></li>
                <li><a href="/">Hadoop</a></li>
                <li><a href="/">Local</a></li>
                </ul>               
              </li>
              <li><a href="/">Format »</a>
                <ul>
                <li><a href="/">CSV</a></li>
                <li><a href="/">JSON</a></li>
                <li><a href="/">AVRO</a></li>
                <li><a href="/">Protocol Buffers</a></li>
                <li><a href="/">Parquet</a></li>
                </ul>               
              </li>

              <li><a href="/">Trasformation »</a>
                <ul>
                  <li><a href="/">Regex</a></li>
                  <li><a href="/">Boundaries</a></li>
                  <li><a href="/">Validation</a></li>
                  <li><a href="/">Cleansing</a></li>
                </ul>                
              </li>

              <li><a href="/">Load »</a>
                <ul>
                  <li><a href="/">Import to Database</a></li>
                  <li><a href="/">Import to Data Lake</a></li>
                  <li><a href="/">Export to File</a></li>
                  <li><a href="/">Export to Stream</a></li>
                </ul>               
              </li>
            </ul>
        </li>
        <li><a href="/">Business Intelligence</a>
            <ul>
                <li><a href="/">Analysis »</a>

                  <ul>
                        <li><a href="/">Metrics</a></li>
                        <li><a href="/">Key Performance Indicators (KPI)</a></li>
                        <li><a href="/">Reports</a></li>
                        
                  </ul>                
                </li>
                <li><a href="/">Dashboards</a></li>

            </ul>
        </li>
        <li><a href="/">Analytics</a>
          <ul>
            <li><a href="/">Regression »</a>
              <ul>
                <li><a href="/">Linear</a></li>
                <li><a href="/">Logistic</a></li>
              </ul>
            </li> 
            <li><a href="/">Clustering</a></li>
            <li><a href="/">Factor Analysis</a></li>
            <li><a href="/">Time Series</a></li>
          </ul>

        </li>        
        
    </ul>
</div>
        </div>
    )
}

export default Menu

