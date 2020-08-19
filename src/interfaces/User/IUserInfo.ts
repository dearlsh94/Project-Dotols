export default interface IUserInfo {
  id: string,
  mail: string,
  server: string,
  character: string,
  isActive: boolean,
  createDateString: string,
  // 인증 완료 시 사용 하는 항목들
  isAuth: boolean,
  point?: number,
  grade?: string,
  authDateString?: string,
}