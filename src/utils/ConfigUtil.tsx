import IMenu from 'interfaces/Common/IMenu';

export const baseUrlForMainCarousel = "/assets/img/";
export const baseUrlForRaidImg = "/assets/img/dictionary/raid/";

export const Menus: Array<IMenu> = [
  {
    idx: 0,
    key: "0000100",
    title: "게시판", 
    url: "/#1",
    sub: [
      {
        idx: 0,
        key: "0000101",
        title: "자유게시판",
        url: "/#1/#1",
        sub: []
      },
      {
        idx: 1,
        key: "0000102",
        title: "서버게시판",
        url: "/#1/#2",
        sub: []
      },
    ]
  },
  {
    idx: 1,
    key: "0000200",
    title: "계산기", 
    url: "/#2",
    sub: [
      {
        idx: 0,
        key: "0000201",
        title: "전투력 계산기",
        url: "/#2/#1",
        sub: []
      },
      {
        idx: 1,
        key: "0000202",
        title: "능력치 계산기",
        url: "/#2/#2",
        sub: []
      },
    ]
  },
  {
    idx: 2,
    key: "0000300",
    title: "도감", 
    url: "/#3",
    sub: [
      {
        idx: 0,
        key: "0000301",
        title: "아이템",
        url: "/dic/item",
        sub: []
      },
      {
        idx: 1,
        key: "0000302",
        title: "환수",
        url: "/#3/#2",
        sub: []
      },
      {
        idx: 2,
        key: "0000303",
        title: "레이드",
        url: "/dic/raid",
        sub: []
      },
    ]
  },
  {
    idx: 3,
    key: "0000400",
    title: "경매장", 
    url: "/#4",
    sub: [
      {
        idx: 0,
        key: "0000401",
        title: "거래게시판",
        url: "/#4/#1",
        sub: []
      }
    ]
  },
  {
    idx: 4,
    key: "0000500",
    title: "회원시스템", 
    url: "/#5",
    sub: [
      {
        idx: 0,
        key: "0000501",
        title: "질의응답",
        url: "/#5/#1",
        sub: []
      },
      {
        idx: 1,
        key: "0000502",
        title: "등급별 보상",
        url: "/#5/#2",
        sub: []
      },
    ]
  },
  {
    idx: 5,
    key: "0000600",
    title: "마이페이지", 
    url: "/#6",
    sub: [
      {
        idx: 0,
        key: "0000601",
        title: "내정보",
        url: "/#6/#1",
        sub: []
      },
      {
        idx: 1,
        key: "0000602",
        title: "아이디 찾기",
        url: "/findid",
        sub: []
      },
      {
        idx: 2,
        key: "0000603",
        title: "비밀번호 찾기",
        url: "/findpw",
        sub: []
      },
    ]
  },
]
