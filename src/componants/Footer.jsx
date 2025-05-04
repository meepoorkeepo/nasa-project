import React from 'react'

export default function Footer(props) {
  const {data, handeleToggleModal} = props;
    return (
      <footer>
        <div className="bgGradient"></div>
        <div>
          <h1>APOD PRODUCT</h1>
          <h2>{data?.title}</h2>
        </div>
        <button onClick={handeleToggleModal}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </footer>
    );
}
