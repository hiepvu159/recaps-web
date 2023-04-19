import React, { useMemo, useCallback } from "react";
import classes from "./step-1.module.scss";
import Card from "@/components/Cards";
import LineStepper from "../Stepper";
import Image from "next/image";
import icSad from "@/assets/img/icSad.svg";
import icSmile from "@/assets/img/icSmile.svg";
import bgImg from "@/assets/img/img.svg";
import Button from "@/components/Button/Button";
import { Grid } from "@mui/material";
import bg from "@/assets/img/test.svg";
import { useRouter } from "next/router";

export default function Step1() {
  const router = useRouter();
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
  const handleClick = useCallback(() => {
    if (router.pathname?.includes("account")) {
      router.push("/account/recommend-caption/step3");
    }
    router.push("/recommend/step3");
  }, []);
  return (
    <>
      {renderHeader}
      <Card className={classes.card}>
        <LineStepper />
        <Grid container spacing={4} style={{ marginTop: 20 }}>
          <Grid item xs={7}>
            <Card className={classes.emotionCard}>
              <Image src={icSmile} alt="" />
              <Image src={icSad} alt="" />
            </Card>
          </Grid>
          <Grid item xs={5} style={{ position: "relative" }}>
            <Image src={bgImg} alt="" className={classes.img} />
            <Button
              buttonType="primary"
              className={classes.btnContinue}
              onClick={handleClick}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
