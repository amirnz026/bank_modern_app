import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>همین حالا شروع کنید!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:me-10 me-0 sm:mt-9 mt-10`}>
      <Button />
    </div>
  </section>
);
export default CTA;
