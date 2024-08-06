import * as styles from "./HelloFeature.module.css";
export default function HelloFeature() {
	return (
		<div className={styles["nametag"]}>
			<div className={styles["nametag-header"]}>Hello, my name is</div>
			<div className={styles["nametag-body"]}>
				<div className={styles["nametag-name"]}>
					{"<Matt Lohkamp />".split("").map((val, i) => (
						<span key={i}>{val}</span>
					))}
				</div>
			</div>
		</div>
	);
}
