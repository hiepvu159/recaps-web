import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import classes from "./home-user.module.scss";
import bg from "@/assets/img/test.svg";
import Link from "next/link";
import Card from "@/components/Cards";
import Tags from "./Tag";
import {
  deleteCaption,
  getListCaptions,
  updateCaption,
} from "@/apis/captions.api";
import ItemCaption from "@/components/CaptionItem";
import { getListTag } from "@/apis/listTag.api";
import { useRouter } from "next/router";

export default function HomeUser() {
  const [listData, setListData] = useState([]);
  const [listDataSearch, setListDataSearch] = useState([]);
  const [listTags, setListTags] = useState([]);
  const { query } = useRouter();
  const handleDelete = useCallback(async (item: any) => {
    await deleteCaption(item?.id_caption)
      .then((res) => alert("Success"))
      .catch((err) => console.log(err));

    await getListCaptions()
      .then((data: any) => {
        setListData(data.table?.reverse());
      })
      .catch((err: any) => console.log(err));
  }, []);

  const handleUpdate = useCallback(async (item: any) => {
    const payload = {
      content: item?.content,
      idCaption: item?.item.id_caption,
      idUser: item?.item.id_user,
      trangThai: item?.emotion,
      idTag: item?.tag,
    };
    await updateCaption(payload)
      .then((res) => alert("Success"))
      .catch((err) => console.log(err));
    await getListCaptions()
      .then((data: any) => {
        setListData(data.table?.reverse());
      })
      .catch((err: any) => console.log(err));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getListCaptions()
        .then((data: any) => {
          setListData(data.table?.reverse());
        })
        .catch((err: any) => console.log(err));

      const data = await getListTag();
      setListTags(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!!query?.tag) {
      const data = listData?.filter(
        (item: any) => Number(item?.id_tag) === Number(query?.tag)
      );
      setListDataSearch(data);
      return;
    }
    setListDataSearch(listData);
  }, [query, listData]);

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
        <Card className={classes.cardCaption}>
          {listDataSearch?.map((item: any, index) => {
            return (
              <ItemCaption
                item={item}
                key={index}
                handleDelete={() => handleDelete(item)}
                listTags={listTags}
                handleUpdate={(e) => handleUpdate(e)}
              />
            );
          })}
        </Card>
      </div>
    </div>
  );
}
