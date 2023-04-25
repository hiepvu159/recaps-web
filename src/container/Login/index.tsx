import Input from "@/components/Input/Input";
import React, { useCallback } from "react";
import bgLogin from "@/assets/img/bg-login.png";
import Image from "next/image";
import classes from "./login.module.scss";
import Card from "@/components/Cards";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { doLogin } from "@/apis/authenticate.api";
import { useRouter } from "next/router";
import { stringify } from "querystring";

export default function Login() {
  const schema = yup.object().shape({
    userName: yup
      .string()
      .required("Vui lòng nhập username")
      .max(32, "Tên tài khoản tối đa 32 ký tự")
      .min(5, "Tên tài khoản tối thiểu 5 ký tự"),
    passWord: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .max(20, "Mật khẩu tối đa 20 ký tự")
      .min(6, "Mật khẩu tối thiểu 6 kí tự"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();
  const onSubmit = useCallback(async (values: any) => {
    const userDetail = await doLogin({
      userName: values.userName,
      password: values.passWord,
    });
    localStorage.setItem("user", JSON.stringify(userDetail));
    router.push("/account");
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              <div>User Name</div>
              <Input
                className={classes.inputBox}
                placeholder="User Name"
                {...register("userName")}
              />
              {errors.userName && (
                <p className="error">{errors.root?.message}</p>
              )}
            </div>
            <div>
              <div>Password</div>
              <Input
                className={classes.inputBox}
                placeholder="PassWord"
                type="password"
                {...register("passWord")}
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
            <Button
              buttonType="primary"
              className={classes.login}
              type="submit"
            >
              Log in
            </Button>
          </div>
          <div className={classes.haveAccount}>
            Not have an account?{" "}
            <Link href="/register" className={classes.signUp}>
              Sign up
            </Link>
          </div>
        </Card>
      </div>
    </form>
  );
}
