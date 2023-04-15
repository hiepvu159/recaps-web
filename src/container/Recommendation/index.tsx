import React, { CSSProperties, useMemo } from "react";
import Image from "next/image";
import classes from "./recommend.module.scss";
import bg from "@/assets/img/test.svg";
import Card from "@/components/Cards";
import Button from "@/components/Button/Button";
import Select from "react-select";
import { StylesConfig } from "react-select";
import cx from "classnames";
import logo from "@/assets/img/logo.png";
import icClock from "@/assets/img/icClock.svg";
import icSmile from "@/assets/img/icSmile.svg";
import icSad from "@/assets/img/icSad.svg";
import icHeart from "@/assets/img/icHeart.svg";
import icComment from "@/assets/img/icComment.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import { Switch } from "@mui/material";

const colourOptions: any = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

export default function Recommendation() {
  const customStyle: StylesConfig = useMemo(
    () => ({
      dropdownIndicator: () => ({
        color: "#000",
        padding: "10px 20px",
      }),
    }),
    []
  );

  const renderListCaption = useMemo(() => {
    return (
      <>
        <div>
          <div className={classes.itemInfo}>
            <Image src={logo} alt="" className={classes.avatar} />
            <div>
              <div className={classes.nameUser}>YunFeng</div>
              <div className={classes.timeItem}>
                Last 1 day ago <Image src={icClock} alt="" />
              </div>
            </div>
          </div>
          <div className={classes.descriptionItem}>
            Hãy gọi anh khi em thấy nhớ, anh sẽ ngồi nghe không quan trọng là
            mấy giờ
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={classes.listTag}>
              <div className={classes.tagItem}>Madness</div>
              <div className={classes.tagItem}>Madness</div>
            </div>

            <div className={classes.emoItem}>
              <Image
                src={icSmile}
                alt=""
                width={32}
                height={32}
                style={{ marginRight: 10, marginTop: 10 }}
              />
            </div>
          </div>
          <div style={{ marginTop: 10, display: "flex" }}>
            <div style={{ display: "flex", marginRight: 40 }}>
              <Image
                src={icComment}
                alt=""
                width={24}
                height={24}
                style={{ marginRight: 10 }}
              />
              <div>123</div>
            </div>
            <div style={{ display: "flex" }}>
              <Image
                src={icHeart}
                alt=""
                width={24}
                height={24}
                style={{ marginRight: 10 }}
              />
              <div>123</div>
            </div>
          </div>
          <div className={classes.divided} />
        </div>
      </>
    );
  }, []);

  return (
    <>
      <div className={classes.background}>
        <Image src={bg} alt="" className={classes.imgBg} />
        <div className={classes.bgDescription}>Đăng caption của bạn</div>
      </div>
      <div className={classes.containerContent}>
        <Card className={cx(classes.cardItem, classes.tagContainer)}>
          <div className={classes.heading}>Nội dung</div>
          <div className={classes.divided} />
          <textarea
            placeholder="What you thinking?"
            className={classes.description}
          />
          <div className={classes.tagSelect}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div className={classes.tagTitle}>Tags</div>
                <div className={classes.desTag}>
                  Thêm tags để mô tả caption của bạn là về gì:
                </div>
              </div>
              <div>
                <div className={classes.emotionTitle}>Emotion</div>
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  label=""
                />
              </div>
            </div>
            <Select
              isMulti
              name="colors"
              options={colourOptions}
              className={classes.selectInput}
              styles={customStyle}
            />
            <Button buttonType="primary" className={classes.btnSubmit}>
              Submit
            </Button>
          </div>
        </Card>
        <Card className={cx(classes.cardItem, classes.recommendContainer)}>
          {renderListCaption}
        </Card>
      </div>
    </>
  );
}

const MaterialUISwitch = styled(Switch)(() => ({
  height: 34,
  padding: 1,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${icSad})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#7F56D9",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${icSmile})`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#FFEDED",
    border: "3px solid #FF8A8A",
    borderRadius: 28.5,
  },
}));
