import React from "react"
import styles from "../static/content.module.css"
import { Link } from "gatsby"

export default function Contentb(props) {
  return (
  	<div className={styles.content}>
  		<Link className={styles.header} to={props.link}>{props.title}</Link>
  		<div className={styles.entry}>
  			<div><img className={styles.image} src={props.img} alt="" /></div>
	  		<p className={styles.descript}>{props.entry}</p>
  		</div>
  	</div>
  )
 }