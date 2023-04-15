import Image from "next/image";
import React, { useMemo } from "react";
import logo from "@/assets/img/logo.png";
import classes from "./header.module.scss";
import Button from "@/components/Button/Button";
import cx from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import icNetwork from "@/assets/img/icNetwork.svg";
import icNoti from "@/assets/img/icNoti.svg";
import sonbim from "@/assets/img/sonbim.svg";

export default function Header() {
  const router = useRouter();
  const renderFeature = useMemo(() => {
    if (router.pathname.includes("account")) {
      return (
        <>
          <div className={classes.groupBtn}>
            <Link href={"/account"}>
              <Button
                buttonType="transparent"
                buttonSize="m"
                className={classes.btnFeature}
              >
                Home
              </Button>
            </Link>
            <Link href={"/account/recommendation"}>
              <Button
                buttonType="transparent"
                buttonSize="m"
                className={classes.btnFeature}
              >
                Captions recommendation
              </Button>
            </Link>
          </div>
          <div className={classes.notifications}>
            <div className={classes.itemNoti}>
              <Image src={icNetwork} alt="" width={25} height={25} />
            </div>
            <div className={classes.itemNoti}>
              <Image src={icNoti} alt="" width={40} height={40} />
            </div>
            <div className={classes.itemNoti}>
              <Image
                src={logo}
                alt=""
                width={30}
                height={30}
                className={classes.avatar}
              />
            </div>
            <div className={cx(classes.itemNoti, classes.name)}>RettoFeng云峰</div>
            <div className={cx(classes.groupBtn, 'ml-3')}>
              <Link href={"/login"}>
                <Button
                  buttonType="outline"
                  buttonSize="m"
                  className={cx(classes.btn, classes.btnLogout)}
                >
                  Log out
                </Button>
              </Link>
            </div>
          </div>
        </>
      );
    }
    return (
      <div className={classes.groupBtn}>
        <Link href={"/login"}>
          <Button
            buttonType="outline"
            buttonSize="m"
            className={cx(classes.btn, classes.btnLogin)}
          >
            Login
          </Button>
        </Link>
        <Button
          buttonType="primary"
          buttonSize="m"
          className={classes.btn}
          onClick={() => router.push("/register")}
        >
          Sign up
        </Button>
      </div>
    );
  }, [router]);
  return (
    <div className={classes.headerWrapper}>
      <div onClick={()=> router.push('/')}>
        <Image
          src={logo}
          alt=""
          width={160}
          height={70}
          className={classes.logoIcon}
        />
      </div>
      {renderFeature}
      {/* {router.pathname === "/account" ? (
        <div className={classes.groupBtn}>
        <Link href={"/login"}>
          <Button
            buttonType="outline"
            buttonSize="m"
            className={cx(classes.btn, classes.btnLogin)}
          >
            Log out
          </Button>
        </Link>   
      </div>
      ) : (
        <div className={classes.groupBtn}>
          <Link href={"/login"}>
            <Button
              buttonType="outline"
              buttonSize="m"
              className={cx(classes.btn, classes.btnLogin)}
            >
              Login
            </Button>
          </Link>
          <Button
            buttonType="primary"
            buttonSize="m"
            className={classes.btn}
            onClick={() => router.push("/register")}
          >
            Sign up
          </Button>
        </div>
      )} */}
    </div>
  );
}
