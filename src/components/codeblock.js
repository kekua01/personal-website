import React from "react"
import styles from "../static/codeblock.module.css"

export default function Codeblock(props) {
  return (
  	<div className={styles.content}>
  		<h1 className={styles.title}><a target="_blank" href={props.link}>{props.title}</a></h1>
  		<div className={styles.chunk}>
  			<img className={styles.image} src={props.img} alt="" />
  			<span className={styles.descript}>{props.text}</span>
  		</div>
  	</div>
  )
 }