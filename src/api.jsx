export const baseUrl = "http://54.196.27.117:8080";
// export const baseUrl = "http://localhost:4000";
// export const baseUrl = "http://localhost:8080";

export const login = baseUrl + "/auth";
export const noteList = baseUrl + "/note/list";
export const makeNote = baseUrl + "/note";
export const saveNote = baseUrl + "/note"; //+noteId
export const noteShare = baseUrl + "/note/share";
// export const noteList = "/note/list";
export const getFriend = baseUrl + "/friend/list";
// export const KAKAO_LOGIN =
//   "https://kauth.kakao.com/oauth/authorize?client_id=c79a3544b3466643b7709be0f727f138&redirect_uri=http://localhost:3000&response_type=code";
export const KAKAO_LOGIN =
  "https://kauth.kakao.com/oauth/authorize?client_id=c79a3544b3466643b7709be0f727f138&redirect_uri=https://client-gamma-bay.vercel.app&response_type=code";
