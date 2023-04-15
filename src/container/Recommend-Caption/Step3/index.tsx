import React from "react";
import classes from "./step3.module.scss";
import Card from "@/components/Cards";
import LineStepper from "../Stepper";
import Image from "next/image";
import bgImg from "@/assets/img/img.svg";
import Button from "@/components/Button/Button";
import { Grid } from "@mui/material";

export default function Step3() {
  return (
    <Card className={classes.card}>
      <LineStepper />
      <Grid container spacing={4} style={{marginTop: 20}}>
        <Grid item xs={7}>
          <Card className={classes.emotionCard}>
            <div className={classes.listTitle}>
              <div className={classes.captionTitle}>Captions</div>
              <div className={classes.captionTitle}>Similarity</div>
            </div>
            <div className={classes.dived}/>
            <div>
              <div>
                <div>
                Người ta thường nói cười là phương thuốc tốt nhất để chữa lành mọi vết thương. Nhưng khi bạn cười không có lý do, lúc đó bạn cần thuốc.
                </div>
              </div>
            </div>
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
