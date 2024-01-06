import styles from "@/styles/Spinning.module.css";

const Spinning = () => {
  return (
    <div className="flex justify-center">
      <div className={styles.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinning;
