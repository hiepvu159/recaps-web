import React from "react";
import classes from "./step-1.module.scss";
import Card from "@/components/Cards";
import LineStepper from "../Stepper";
import Image from "next/image";
import icSad from "@/assets/img/icSad.svg";
import icSmile from "@/assets/img/icSmile.svg";
import bgImg from "@/assets/img/img.svg";
import Button from "@/components/Button/Button";
import { Grid } from "@mui/material";

export default function Step1() {
  return (
    <Card className={classes.card}>
      <LineStepper />
      <Grid container spacing={4} style={{marginTop: 20}}>
        <Grid item xs={7}>
          <Card className={classes.emotionCard}>
            <Image src={icSmile} alt="" />
            <Image src={icSad} alt="" />
          </Card>
        </Grid>
        <Grid item xs={5} style={{position: 'relative'}}>
          <Image src={bgImg} alt="" className={classes.img} />
          <Button buttonType="primary" className={classes.btnContinue}>
            Continue
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
