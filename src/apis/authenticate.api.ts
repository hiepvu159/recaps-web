import unauthorizedRequest from "@/config/unauthorizedRequest";

export interface UserRequestBody {
  userName: string;
  password: string;
}
export function doLogin(body: UserRequestBody) {
  return unauthorizedRequest.post(`/login`, body);
}

export function signUp(body: any){
  return unauthorizedRequest.post(`/register/new`, body);

}