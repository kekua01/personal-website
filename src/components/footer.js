import React from "react"
import styles from "../static/footer.module.css"

export default function Footer(props) {
  return (
  	<div className={styles.footer}>
  		<a className={styles.link} target= '_blank' href="/about/">Resume</a>
  		<a className={styles.link} target= '_blank' href="https://www.linkedin.com/in/coby-sheehan-851574190/">LinkedIn</a>
  		<a className={styles.link} target= '_blank' href="https://github.com/kekua01">Github</a>
  	</div>
  )
 }