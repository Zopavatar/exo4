import React from 'react'

export function Card({nom,age,prenom,bgcolor,la_height,la_width,img}) {
    let style = {
        backgroundColor: bgcolor,
        height: la_height,
        width: la_width,
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "30px",
        borderRadius: "20px",
    }

  return (
    <div style={style}>
        <img src={img} alt="" />

        <p>Nom: {nom}</p>
        <p>Prénom: {prenom}</p>
        <p>Age: {age}</p>
    </div>
  )
}
