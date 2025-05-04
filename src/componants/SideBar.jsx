import React from 'react'

export default function SideBar(props) {
  const {handeleToggleModal, data} = props
  return (
    <div className="sidebar">
      <div onClick={handeleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div>
          <p>{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handeleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
