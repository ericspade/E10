import React, { useState } from 'react'
import styles from "./searchbar.module.css"

export default function Searchbar({ title, isInputExist, tags, /* onSearch */ }) {

	const [inputValue, setInputValue] = useState("")

	const Input = () => {
		return (
			<div className={styles["input-container"]}>
				<button className={styles["search-button"]} /* onClick={onSearch} */>
					<img src="./images/icons/search.svg" alt="" />
				</button>
				<input type="text" placeholder="Search" className={styles.input} />
			</div>

		)
	}

	return (
		<div className={styles.searchbar}>
			<div className={styles.container}>
				{title && <p className={styles.title}>{title}</p>}
				{isInputExist && <Input />}
				{tags &&
					<div className={styles.tags}>
						{tags.map((tag, index) => (
							<button key={index} className={styles.tag}>{tag}</button>
						))}
					</div>
				}
			</div>

		</div>
	)
}
