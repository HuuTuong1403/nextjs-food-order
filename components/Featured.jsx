import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Featured() {
  const [index, setIndex] = useState(0);

  const images = [
    "/images/featured.png",
    "/images/featured2.png",
    "/images/featured3.png",
  ];
  const length = images.length;

  const handleArrow = (direction) => {
    if (direction === "l") setIndex(index !== 0 ? index - 1 : 2);
    else setIndex(index !== 2 ? index + 1 : 0);
  };

  useEffect(() => {
    const nextSlide = () => {
      setIndex((index) => (index === length - 1 ? 0 : index + 1));
    };

    const slider = setTimeout(nextSlide, 3000);

    return () => {
      clearTimeout(slider);
    };
  }, [index, length]);

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/images/arrowl.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>

      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/images/arrowr.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
