import React from "react"
import styles from "../static/heading.module.css"
import tree from '../static/tree.png'
import { Link } from "gatsby"

export default function Heading(props) {
  return (
  	<React.Fragment>
  		<img src={tree} className={styles.palmtree} id={styles.tree} alt="" />
  		<span className={styles.pagetitle}>{props.title}</span>
  		<img src={props.imageSrc} className={styles.image} alt="" />
  		<Link to={props.href} className={styles.nav}>{props.linkText}</Link>
  	</React.Fragment>
  )
 }