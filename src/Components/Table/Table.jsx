import React from 'react'
import './style.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import zep from "../../Images/zeplin.svg";
import figma from "../../Images/figma.svg";
import meta from "../../Images/meta.svg";
import ang from "../../Images/angular.svg";
import vue from "../../Images/vue.svg";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
function Table() {
    const data = [
        { source: 'Zeplin', amount: '686.00', status: 'Active', userID: '114423', joined: 'October', group: 'Design', logo: zep },
        { source: 'Figma', amount: '864.00', status: 'Pending', userID: '76223', joined: 'June', group: 'Finance', logo: figma },
        { source: 'Meta', amount: '176.00', status: 'Cancelled', userID: '89453', joined: 'March', group: 'Coding', logo: meta },
        { source: 'Angular', amount: '49.00', status: 'Active', userID: '11467', joined: 'February', group: 'Marketing', logo: ang },
        { source: 'Vue', amount: '999.00', status: 'Active', userID: '67385', joined: 'October', group: 'Finance', logo: vue }
      ];
  return (
    <section class="tableContainer">
    <div className="tableHeader">
        <p className="tableTitle">Performance</p>
        <BsThreeDotsVertical className='threedots'/>
      </div>
    <div class="tableContentContainer">
    <table className="table">
      <thead>
        <tr>
          <th>Source</th>
          <th>Amount</th>
          <th>Status</th>
          <th>User ID</th>
          <th>Joined</th>
          <th>Group</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
              <div className="tableCompany">
                <div className="tableLogo">
                  <img src={item.logo} alt={item.source} />
                </div>
                <p className="tableApp">{item.source}</p>
              </div>
            </td>
            <td>{item.amount}</td>
            <td>
              <div className={`tableBadge tableBadge--${item.status.toLowerCase()}`}>
                <p className="tableStatus">{item.status}</p>
              </div>
            </td>
            <td>{item.userID}</td>
            <td>{item.joined}</td>
            <td>{item.group}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div class="pagination">
      <button class="arrow">
      <FaArrowLeft/>
      </button>
      <p class="pageNumber">1/15</p>
      <button class="arrow">
      <FaArrowRight/>
      </button>
    </div>
  </section>
  )
}

export default Table