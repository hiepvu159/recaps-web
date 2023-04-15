import Input from "@/components/Input/Input";
import React from "react";
import bgLogin from "@/assets/img/bg-login.png";
import Image from "next/image";
import classes from "./login.module.scss";
import Card from "@/components/Cards";
import Button from "@/components/Button/Button";
import Link from "next/link";

export default function Login() {
  return (
    <div className={classes.container}>
      <Image src={bgLogin} alt="" width={673} height={673} />
      <Card className={classes.card}>
        <div>
          <div style={{ marginBottom: 20 }}>
            <h1 className={classes.titleLogin}>Log in</h1>
            <div className={classes.description}>
              Welcome back! Please enter your details.
            </div>
          </div>
          <div>
            <div>Email</div>
            <Input className={classes.inputBox} placeholder="Email address" />
          </div>
          <div>
            <div>Password</div>
            <Input
              className={classes.inputBox}
              placeholder="Password"
              type="password"
            />
          </div>
          <div className={classes.actions}>
            <label className={classes.rememeberActions}>
              <input
                type="checkbox"
                onClick={() => console.log("first")}
                className={classes.rememberBox}
              />
              Remember me !
            </label>
            <div className={classes.forgotItems}>Forgot password?</div>
          </div>
          <Button buttonType="primary" className={classes.login}>Log in</Button>
        </div>
        <div className={classes.haveAccount}>
          Not have an account? <Link href="/register" className={classes.signUp}>Sign up</Link>
        </div>
      </Card>
    </div>
  );
}
