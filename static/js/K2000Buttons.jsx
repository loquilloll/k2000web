//K2000Buttons
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './K2000Buttons.css';
import styles from './K2000Buttons.css'; 
import 'bootstrap';
class K2000Buttons extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base">
        <div className={styles.leftGrid}>
            <div className={styles.btnText}>
              <button onClick={() => {
                fetch('inst/start')
                }}>What</button> </div>	
            <div className={styles.btnText}>
              <button onClick={() => {
                fetch('inst/pause')
                }}>Stop</button>
            </div>	
        </div>

        <div className={styles.centerGrid}>
          <div className={`${styles.btnGrid} ${styles.col1} ${styles.row1}`}>
              <div className={styles.btnText}>
                <p>MX+B</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/VOLT/DC')
                  }}>DCV</button>
              </div>	
              <div className={styles.btnText}>
                <p>%</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/VOLT/AC')
                  }}>ACV</button>
              </div>
          </div>
         <div className={`${styles.btnGrid} ${styles.col2} ${styles.row1}`}>
              <div className={styles.btnText}>
                <p>dBm</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/CURR/DC')
                  }}>DCI</button>
              </div>	
              <div className={styles.btnText}>
                <p>dB</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/CURR/AC')
                  }}>ACI</button>
              </div>
          </div>
          <div className={`${styles.btnGrid} ${styles.col3} ${styles.row1}`}>
              <div className={styles.btnText}>
                <p>CONT</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/RES')
                }}>OHM2</button>
              </div>	
              <div className={styles.btnText}>
                <p>PERIOD</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/FREQ')
                  }}>FREQ</button>
              </div>	
          </div>
          <div className={`${styles.btnGrid} ${styles.col4} ${styles.row1}`}>
              <div className={styles.btnText}>
                <p>DIODE</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/FRES')
                  }}>OHM4</button>
              </div>	
              <div className={styles.btnText}>
                <p>TCOUPL</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/TEMP')
                  }}>TEMP</button>
              </div>
          </div>
          <div className={`${styles.btnGroup} btn-group btn-group-toggle \
              ${styles.col1} ${styles.row2}`} data-toggle={styles.buttons}>
            <div className={`${styles.roundBtnGroup} btn-group-toggle`}>
              <p>DELAY</p>
              <label className={`${styles.roundBtn} btn-secondary \
                ${styles.btnLeft}`}>
                <input type={styles.radio} name={styles.options} id={styles.option1} 
                  autoComplete={styles.off}/>EX TRIG
              </label>
            </div>
            <div className={`${styles.roundBtnGroup} btn-group-toggle`}>
              <p>HOLD</p>
              <label className={`${styles.roundBtn} ${styles.btnRight} \
                btn-secondary`}>
                <input type={styles.radio} name={styles.options} 
                  id={styles.option2} autoComplete={styles.off}/>TRIG
              </label>
            </div>
          </div>
          {/* <div className={`${styles.btnGrid} ${styles.col2} ${styles.row2}`}>
              <div className={styles.btnText}>
                <p>dBm</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/CURR/DC')
                  }}>DCI</button>
              </div>	
              <div className={styles.btnText}>
                <p>dB</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/CURR/AC')
                  }}>ACI</button>
              </div>
          </div>
          <div className={`${styles.btnGrid} ${styles.col3} ${styles.row2}`}>
              <div className={styles.btnText}>
                <p>CONT</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/RES')
                  }}>OHM2</button>
              </div>	
              <div className={${styles.btnText}}>
                <p>PERIOD</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/FREQ')
                  }}>FREQ</button>
              </div>	
          </div>
          <div className={`${styles.btnGrid} ${styles.col4} ${styles.row2}`}>
              <div className={styles.btnText}>
                <p>DIODE</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/FRES')
                  }}>OHM4</button>
              </div>	
              <div className={styles.btnText}>
                <p>TCOUPL</p>
                <button className={`${styles.btn} btn-secondary`} onClick={() => {
                  fetch('inst/TEMP')
                  }}>TEMP</button>
              </div>
          </div>*/}
        </div>
        <div className={styles.leftGrid}>
        </div>
      </div>
    );
  }
}

export default K2000Buttons;
