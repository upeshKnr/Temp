import styles from "./home.module.css";

import photo1 from "../../assets/home5.png";
import photo2 from "../../assets/home6.png";
import photo3 from "../../assets/home7.jpg";
import { useNavigate } from "react-router";

const FourthSection = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.fourth} container sections-padding`}>
      <div
        className={styles.text}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <p className="paragraph">About</p>
        <h2>
          Respect Your Body,
          <br />
          It’s the Only One You Get
        </h2>
        <p>
          “Exercise is done against one's wishes and maintained only because the
          alternative is worse.” ...
        </p>
        <div className={styles.text_one}>
          <div>
            <h3>Motivation</h3>
            <p>
              "All our dreams can come true if we have the courage to pursue
              them.”{" "}
            </p>
          </div>
          <img src={photo1} alt="Photo_one" />
        </div>
        <div className={styles.text_two}>
          <img src={photo2} alt="Photo_two" />
          <div>
            <h3>Inspire</h3>
            <p>If you believe it'll work out, you'll see opportunities </p>
          </div>
        </div>
      </div>
      <div
        className={styles.fourth_image_container}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <img src={photo3} alt="Man Exercise" />
        <button onClick={() => navigate("/schedule")}>Get Started</button>
      </div>
    </div>
  );
};

export default FourthSection;
