import { card } from "../assets";
import styles, { layout } from "../style.js";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        تنها با انجام چند قدم <br className="sm:block hidden" /> کارت خود را
        وارد کنید.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
