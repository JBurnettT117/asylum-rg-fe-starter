import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      <div className="graphs-section">
        <div className="grant-rates-by-office-graph-container">
          <img
            src={GrantRatesByOfficeImg}
            alt="grant rates by office"
            className="gr-office-img"
          />
          <p>Search Grant Rates By Office</p>
        </div>
        <div className="grant-rates-by-nationality-container">
          <img
            src={GrantRatesByNationalityImg}
            alt="grant rates by nationality"
            className="gr-nationality-img"
          />
          <p>Search Grant Rates By Nationality</p>
        </div>
        {/* finish fleshing out these containers, keep up the good work. */}
        <div className="grant-rates-over-time-container">
          <img
            src={GrantRatesOverTimeImg}
            alt="grant rates over time"
            className="gr-overtime-img"
          />
          <p>Search Grant Rates Over Time</p>
        </div>
      </div>
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        <a href="https://humanrightsfirst.org/wp-content/uploads/2022/10/COW2021001887-I589Data.csv">
          <div className="read-more-btn">
            <button
              type="button"
              className="ant-btn ant-btn-default"
              style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            >
              <span>Download the Data</span>
            </button>
          </div>
        </a>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      {/* Bottom Section: Add code here for the graphs section for your first ticket */}
      <div className="bottom-section">
        <h1>Systemic Disparity Insights</h1>
        <div className="graph-information-box">
          <div className="graph-information-sub-box">
            <h2 className="sub-box-title">36%</h2>
            <h3 className="sub-box-info">
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36 percent from an average of 44 percent in
              fiscal year 2016 to 28 percent in fiscal year 2020
            </h3>
          </div>
          <div className="graph-information-sub-box">
            <h2 className="sub-box-title">5%</h2>
            <h3 className="sub-box-info">
              The New York asylum office grant rate dropped to 5 percent in
              fiscal year 2020.
            </h3>
          </div>
          <div className="graph-information-sub-box">
            <h2 className="sub-box-title">6x Lower</h2>
            <h3 className="sub-box-info">
              Between fiscal year 2017 and 2020, the New York asylum office's
              average grant rate was six times lower than the San Francisco
              asylum office.
            </h3>
          </div>
        </div>
        <a
          href="https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="read-more-btn">
            <button
              type="button"
              className="ant-btn ant-btn-default"
              style={{
                backgroundColor: 'rgb(64,76,74)',
                color: 'rgb(255,255,255)',
              }}
            >
              <span>Read More</span>
            </button>
          </div>
        </a>
      </div>
      <p onClick={() => scrollToTop()} className="back-to-top">
        Back To Top ^
      </p>
    </div>
  );
}
export default RenderLandingPage;

//task to complete. change flex order based on screen width.
// add in some kind of bacground that changes on view width
// add in a "read more" button that navigates to the right site.
//add in a "download the data" button that does whatever the act
