import Card from "@/components/Cards";
import { Grid } from "@mui/material";
import React, { useCallback, useState, useMemo } from "react";
import LineStepper from "../Stepper";
import classes from "./step0.module.scss";
import Button from "@/components/Button/Button";
import icDrop from "@/assets/img/icDrop.svg";
import Image from "next/image";
import bg from "@/assets/img/test.svg";
import { useRouter } from "next/router";

export default function Step0() {
  const router = useRouter();
  const [path, setPath] = useState(null);
  const handleChange = useCallback((e: any) => {
    const targetName = e.target.value.split("\\").pop();
    setPath(targetName);
  }, []);
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
  const handleCountine = useCallback(() => {
    if (router.pathname?.includes("account")) {
      router.push("/account/recommend-caption/step2");
    }
    router.push("/recommend/step2");
  }, []);
  return (
    <>
      {renderHeader}
      <div style={{ backgroundColor: "#FFFAFA", height: "100%" }}>
        <Card className={classes.card}>
          <LineStepper />
          <Grid
            container
            style={{ marginBottom: 20, marginTop: 20 }}
            spacing={4}
          >
            <Grid item xs={7}>
              <Card className={classes.findCard}>
                <div className={classes.findCaption}>Find any caption</div>
                <div className={classes.desCaption}>
                  To search for more captions you have to login
                </div>
              </Card>
            </Grid>
            <Grid item xs={5}>
              <Card className={classes.emotionCard}>
                <label htmlFor="upload">
                  <div className={classes.dragCard}>
                    <span className={classes.dragDropTitle}>
                      Drag & Drop your image here
                    </span>
                    <Image src={icDrop} alt="" />
                    <div style={{ marginTop: 20 }}>{path}</div>
                  </div>
                  <input
                    type="file"
                    id="upload"
                    onChange={(e) => handleChange(e)}
                    hidden
                  />
                </label>
                <Button
                  buttonType="primary"
                  onClick={handleCountine}
                  disabled={path === null}
                  style={{ marginTop: 20 }}
                >
                  Continue
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </div>
    </>
  );
}
