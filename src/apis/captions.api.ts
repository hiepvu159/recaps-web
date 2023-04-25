import unauthorizedRequest from "@/config/unauthorizedRequest";

interface NewCaptionBody {
  content: string;
  idUser: number;
  trangThai: boolean;
  tags?: string[];
  favourite?: boolean;
  userId?: string;
}

export function getListCaptions() {
  return unauthorizedRequest.get(`/function/getListCaption`);
}

export function addNewCaption(body: NewCaptionBody) {
  return unauthorizedRequest.post(`/AddCaption/new`, body);
}
