import React from "react"
import styles from "../static/clickbox.module.css"

export default function Box(props) {
  return (
  	<div className={styles.box}>
  		<h2 className={styles.title}>{props.text}</h2>
  		<img className={styles.image} src={props.img} alt="" />
  		<span className={styles.description}>{props.description}</span>
  	</div>
  )
 }