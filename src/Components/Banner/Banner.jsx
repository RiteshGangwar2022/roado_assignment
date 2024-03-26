import React from 'react'
import './style.css'
import bolt from "../../Images/bolt.svg";
import boltmobile from "../../Images/bolt-mobile.svg";

function Banner() {
  return (
    <div class="banner">
    <div class="banner_container">
      <h6 class="banner_title">Unlock premium stats</h6>
      <p class="banner_para">
        Get up to 10TB of storage for a limited time
      </p>
    </div>
    <button class="upgrade">
      <img
        src={bolt}
        class="desktop"
        alt='desktop'
      />
      <img
        src={boltmobile}
        class="mobile"
        alt='mobile'
      />
      <span>Upgrade</span>
    </button>
  </div>
  )
}

export default Banner