import React, { useMemo } from "react";
import classes from "./recommend-caption.module.scss";
import Image from "next/image";
import bg from "@/assets/img/test.svg";
import Step1 from "./Step1";
import Step0 from "./Step0";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function RecommendCaption() {
  const renderHeader = useMemo(() => {
    return (
      <div style={{ backgroundColor: "#d5b6ff" }}>
        <div className={classes.headerWrapper}>
          <Image src={bg} alt="" className={classes.imgBg} />
          <div className={classes.bgDescription}>Caption recommendation</div>
        </div>
      </div>
    );
  }, []);

  return (
    <>
      {renderHeader}
      <div style={{ backgroundColor: "#FFFAFA", height: "100%" }}>
        {/* <Step0/> */}
        {/* <Step1 /> */}
        {/* <Step2/> */}
        {/* <Step3/> */}
      </div>
    </>
  );
}
