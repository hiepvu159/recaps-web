import Card from "@/components/Cards";
import React, { useCallback, useState } from "react";
import classes from "./action.module.scss";
import Button from "@/components/Button/Button";
import Image from "next/image";
import icEdit from "@/assets/img/icEdit.svg";
import icDelete from "@/assets/img/icDelete.svg";
import ModalEdit from "@/components/ModalEdit";
import ModalDelete from "@/components/ModalDelete";

interface Props {
  item: any;
}

export default function Action(props: Props) {
  const { item } = props;
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleShowPopUpEdit = useCallback(() => {
    setShowEdit(true);
  }, []);
  const handleHidePopUpEdit = useCallback(() => {
    setShowEdit(false);
  }, []);
  const handleHidePopUpDelete = useCallback(() => {
    setShowDelete(false);
  }, []);
  const handleShowPopUpDelete = useCallback(() => {
    setShowDelete(true);
  }, []);
  return (
    <>
      <Card className={classes.card}>
        <Button
          buttonType="transparent"
          className={classes.btn}
          onClick={handleShowPopUpEdit}
        >
          <Image src={icEdit} alt="" />
          <span className={classes.text}>Edit</span>
        </Button>
        <Button
          buttonType="transparent"
          className={classes.btn}
          onClick={handleShowPopUpDelete}
        >
          <Image src={icDelete} alt="" />
          <span className={classes.text}>Delete</span>
        </Button>
      </Card>
      {showEdit && (
        <ModalEdit
          open={showEdit}
          handleClose={handleHidePopUpEdit}
          item={item}
        />
      )}
      {showDelete && (
        <ModalDelete
          open={showDelete}
          handleClose={handleHidePopUpDelete}
          item={item}
        />
      )}
    </>
  );
}
