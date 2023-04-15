import Input from "@/components/Input/Input";
import React, { useState } from "react";
import bgLogin from "@/assets/img/bg-login.png";
import Image from "next/image";
import classes from "./register.module.scss";
import Card from "@/components/Cards";
import Button from "@/components/Button/Button";
import Link from "next/link";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  return (
    <div className={classes.container}>
      <Image src={bgLogin} alt="" width={673} height={673} />
      <Card className={classes.card}>
        <div>
          <div style={{ marginBottom: 20 }}>
            <h1 className={classes.titleLogin}>Sign Up</h1>
            <div className={classes.description}>
              Log in to your Recap account to receive the latest notifications
            </div>
          </div>
          <div>
            <div className={classes.titleBox}>Name</div>
            <Input className={classes.inputBox} placeholder="Name" />
          </div>
          <div>
            <div className={classes.titleBox}>Email</div>
            <Input className={classes.inputBox} placeholder="Email address" />
          </div>
          <div>
            <div className={classes.titleBox}>Password</div>
            <Input
              className={classes.inputBox}
              placeholder="Password"
              type="password"
            />
          </div>
          <div>
            <div className={classes.titleBox}>Confirm Password</div>
            <Input
              className={classes.inputBox}
              placeholder="Password"
              type="password"
            />
          </div>
          <Button buttonType="primary" className={classes.login}>
            Sign up
          </Button>
        </div>
        <div className={classes.haveAccount}>
          Already have an account? <Link href="/login" className={classes.signUp}>Log In</Link>
        </div>
      </Card>
    </div>
  );
}
