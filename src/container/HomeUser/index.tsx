import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import classes from "./home-user.module.scss";
import bg from "@/assets/img/test.svg";
import Link from "next/link";
import Card from "@/components/Cards";
import Button from "@/components/Button/Button";
import icX from "@/assets/img/icX.svg";
import icSearch from "@/assets/img/icSearch.svg";
import icStar from "@/assets/img/icStar.svg";
import icUnStar from "@/assets/img/icUnStar.svg";
import icSmile from "@/assets/img/icSmile.svg";
import icSad from "@/assets/img/icSad.svg";
import icAction from "@/assets/img/icAction.svg";
import Tags from "./Tag";
import { getListCaptions } from "@/apis/captions.api";
import moment from "moment";

export default function HomeUser() {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await getListCaptions()
        .then((data: any) => setListData(data?.reverse()))
        .catch((err: any) => console.log(err));
    };
    fetchData();
  }, []);

  const renderHeader = useMemo(() => {
    return (
      <div style={{ backgroundColor: "#FFFAFA", position: "relative" }}>
        <div className={classes.headerWrapper}>
          <Image src={bg} alt="" className={classes.imgBg} />
          <div className={classes.itemMenu}>
            <div style={{ marginBottom: 10, display: "flex" }}>
              <Link href="/account" className={classes.captions}>
                Collection
              </Link>
              <Link href="/account/favourite" className={classes.favourite}>
                Favourite
              </Link>
              <Link href="/account/captions" className={classes.favourite}>
                Captions
              </Link>
            </div>
            <div className={classes.divied} />
          </div>
        </div>
      </div>
    );
  }, []);

  const renderCaptions = useMemo(() => {
    return (
      <Card className={classes.cardCaption}>
        {listData?.map((item: any) => (
          <div style={{ marginBottom: 20 }} key={item?.id}>
            <div className={classes.itemCaption}>
              <div className={classes.itemWrapper}>
                <Image src={icStar} alt="" />
                <div style={{ marginLeft: 15 }}>
                  <div className={classes.descriptionItem}>{item?.content}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className={classes.listTagItem}>
                      <div className={classes.itemTagInList}>Tình yêu</div>
                      <div className={classes.itemTagInList}>Ái Thương</div>
                      <div className={classes.itemTagInList}>Ái Thương</div>
                    </div>
                    <div className={classes.itemDescription}>
                      <div className={classes.itemDay}>
                        {moment(item?.createDate).startOf("day").fromNow()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.action}>
                <Image
                  src={item?.trangThai ? icSmile : icSad}
                  alt=""
                  width={24}
                  height={24}
                />
                <Button buttonType="transparent" buttonSize="s">
                  <Image src={icAction} alt="" />
                </Button>
              </div>
            </div>
            {/* <div className={classes.itemDescription}>
              <div className={classes.itemDay}>
                {moment(item?.createDate).startOf("day").fromNow()}
              </div>
            </div> */}
          </div>
        ))}
      </Card>
    );
  }, [listData]);

  return (
    <div style={{ backgroundColor: "#FFFAFA" }}>
      {renderHeader}
      <div
        style={{
          backgroundColor: "#FFFAFA",
          display: "flex",
          justifyContent: "center",
          padding: "0 160px 30px 160px",
        }}
      >
        <Tags />
        {renderCaptions}
      </div>
    </div>
  );
}
