import Button from "@/components/Button/Button";
import Card from "@/components/Cards";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import classes from "./tag.module.scss";
import icX from "@/assets/img/icX.svg";
import icSearch from "@/assets/img/icSearch.svg";
import { getListTag } from "@/apis/listTag.api";
import { useRouter } from "next/router";

export default function Tags() {
  const router = useRouter();
  const [listTags, setListTags] = useState<any>([]);
  useEffect(() => {
    const getAllTags = async () => {
      const data = await getListTag();
      setListTags(data);
    };
    getAllTags().catch((err) => console.log());
  }, [router]);

  const renderTags = useMemo(() => {
    return (
      <Card className={classes.cardTags}>
        <div className={classes.title}>Tags</div>
        <div className={classes.listItemTags}>
          {listTags?.map((item: any) => (
            <div className={classes.itemTags} key={item?.id}>
              <Button buttonType="primary" className={classes.btnTags}>
                {item?.name}
              </Button>
              {/* <Image src={icX} alt="" style={{ margin: "0 10px" }} />
              <div className={classes.numberTags}>{item?.data}</div> */}
            </div>
          ))}
        </div>
        <div>
          <Image src={icSearch} alt="" className={classes.icSearch} />
          <input
            type="text"
            className={classes.searchBox}
            placeholder="Type your search tags..."
          />
        </div>
      </Card>
    );
  }, [listTags]);
  return <>{renderTags}</>;
}
