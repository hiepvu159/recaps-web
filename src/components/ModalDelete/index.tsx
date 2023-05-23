import { Modal } from "@mui/material";
import React, { useCallback } from "react";
import Card from "../Cards";
import classes from "./modal-delete.module.scss";
import Image from "next/image";
import icDanger from "@/assets/img/icDanger.svg";
import Button from "../Button/Button";
import { deleteCaption } from "@/apis/captions.api";

interface Props {
  open: boolean;
  handleClose: () => void;
  item: any;
  handleDelete: (item: any) => void;
}
export default function ModalDelete({
  open,
  handleClose,
  item,
  handleDelete,
}: Props) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card className={classes.card}>
        <Image src={icDanger} alt="" className={classes.danger} />
        <span className={classes.title}>Delete Caption</span>
        <span className={classes.description}>
          Are you sure you want to delete this caption? This action cannot be
          undone.
        </span>
        <div className={classes.btn}>
          <Button
            buttonType="outline"
            className={classes.btnCancel}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            buttonType="primary"
            className={classes.btbDelete}
            onClick={() => handleDelete(item)}
          >
            Delete
          </Button>
        </div>
      </Card>
    </Modal>
  );
}
