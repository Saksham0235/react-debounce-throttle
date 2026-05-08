import React from 'react';
import styles from './FiveDivs.module.scss'

function FiveDivs() {

  return (
    <div className={styles.main}>
      <div>
        <button>
         Div1
        </button>
      </div>
          <div>
        <button>
          Duv2
        </button>
      </div>
          <div>
        <button>
         Div3
        </button>
        </div>
            <div>
        <button>
         Div4
        </button>
      </div>
          <div>
        <button>
         Div3
        </button>
        </div>
    </div>
  )
}

export default FiveDivs
