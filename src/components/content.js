import React from "react"
import styles from "../static/content.module.css"

export default function Content(props) {
  return (
  	<div className={styles.content}>
  		<a className={styles.header} target= '_blank' href={props.link}>{props.title}</a>
  		<div className={styles.entry}>
  			<div><img className={styles.image} src={props.img} alt="" /></div>
	  		<p className={styles.descript}>{props.entry}</p>
  		</div>
  	</div>
  )
 }