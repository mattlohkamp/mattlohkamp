import * as styles from "./HelloFeature.module.css";
import strings from "../../public/data/site.json";
export default function HelloFeature() {
	return (
		<div className={styles["nametag"]}>
			<div className={styles["nametag-header"]}>
				{strings.HelloFeature["nametag-label"]}
			</div>
			<div className={styles["nametag-body"]}>
				<div className={styles["nametag-name"]}>
					{strings.HelloFeature["nametag-name"].split("").map((val, i) => (
						<span key={i}>{val}</span>
					))}
				</div>
			</div>
		</div>
	);
}
