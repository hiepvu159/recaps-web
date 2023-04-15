import Button from "@/components/Button/Button";
import React from "react";
import classes from "./home.module.scss";
import cx from "classnames";
import Image from "next/image";
import icExplore from "@/assets/img/icExplore.svg";
import icLego from "@/assets/img/icLego.svg";
import icWriteCaps from "@/assets/img/icWriteCaps.svg";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <div className={classes.textWrapper}>
        <h1 className={classes.title}>Recap - Captions recommendation</h1>
        <div className={classes.description}>Bạn yêu thích mạng xã hội ?</div>
        <div className={classes.description}>
          Bạn chụp được những bức ảnh đẹp nhưng lại không biết viết caption là
          gì ?
        </div>
        <div className={classes.description}>
          hay chỉ đơn giản là bạn thích những câu nói hay và hài hước. Recap sẽ
          giúp bạn.
        </div>
      </div>
      <div className={classes.groupBtn}>
        <Button
          buttonType="primary"
          buttonSize="m"
          className={cx(classes.btn, classes.btnExplore)}
          onClick={() => router.push('/login')}
        >
          Khám phá ngay
        </Button>
        <Button
          buttonType="outline"
          buttonSize="m"
          className={classes.btn}
          onClick={() => console.log("first")}
        >
          Gợi ý caption
        </Button>
      </div>
      <div className={classes.groupAction}>
        <div className={classes.itemAction}>
          <Image src={icExplore} alt="" width={104} height={107} />
          <div className={classes.contentAction}>
            <div className={classes.titleAction}>Khám phá captions</div>
            <div className={classes.descriptionAction}>Explore our wonderful captions</div>
          </div>
        </div>
        <div className={classes.itemAction}>
          <Image src={icWriteCaps} alt="" width={104} height={107} />
          <div className={classes.contentAction}>
            <div className={classes.titleAction}>Đăng captions</div>
            <div className={classes.descriptionAction}>Contribute caption with your creativity.</div>
          </div>
        </div>
        <div className={classes.itemAction}>
          <Image src={icLego} alt="" width={104} height={107} />
          <div className={classes.contentAction}>
            <div className={classes.titleAction}>Thử ngay hệ thống recommend cực đỉnh</div>
            <div className={classes.descriptionAction}>Pat yourself on the back. You deserve it.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
