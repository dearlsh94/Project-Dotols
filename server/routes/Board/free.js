const express = require('express');
const router = express.Router();

const authMiddleware = require('../../middleware/auth');
const myLogger = require('../../myLogger');

const FreeSchema = require('../../schemas/Board/FreeSchema');
const UserInfoSchema = require('../../schemas/User/UserInfoSchema');


/*
*    글쓰기
*    TYPE : POST
*    URI : /api/board/free/create
*    HEADER: { "token": token }
*    BODY: { "category", "title", "content", "writer" }
*    RETURN CODES:
*        200: 성공
*        3001: 게시글 DB 생성 오류
*        500: 서버 오류
*/
router.use('/create', authMiddleware);
router.post('/create', (req, res) => {
  const post = new FreeSchema({
    category: req.body.category,
    title: req.body.title,
    content: req.body.content,
    writer: req.body.writer
  });

  FreeSchema.create(post, (err, post) => {
    if (err) {
      myLogger(`[ERROR] : ${post.title} CREATED ERROR`);
      res.status(200).send({
        code: 3001,
        message: "DB 게시글 생성 오류"
      });

      return false;
    }

    return post;
  })
  .then((post) => {
    myLogger(`[SUCCESS] : ${post.title} CREATED SUCCESS`);
    res.status(200).send({
      code: 200,
      message: "게시글이 등록되었습니다.",
      seq: post.seq
    });
  
    return true;
  })
  .catch((e) => {
    myLogger(`POST CREATE ERROR > ${e}`);

    res.status(200).send({
      code: 500,
      message: "서버 오류가 발생했습니다.",
    });

    return false;
  })
});


/*
*    게시글 전체 조회
*    TYPE : GET
*    URI : /api/board/free/find
*    HEADER: { "token": token }
*    BODY: { "category", "title", "content", "writer", "createDateString" }
*    RETURN CODES:
*        200: 성공
*        500: 서버 오류
*/
router.get('/find', (req, res) => {
  const category = req.query.category;
  const title = req.query.title;
  const content = req.query.content;
  const writer = req.query.writer;
  const createDateString = req.query.createDateString;

  let filter = {};

  if (category) {
    filter = {
      ...filter,
      category: category
    }  
  }
  if (title) {
    filter = {
      ...filter,
      title: title
    }  
  }
  if (content) {
    filter = {
      ...filter,
      content: content
    }  
  }
  if (writer) {
    filter = {
      ...filter,
      writer: {
        id: writer
      }
    }  
  }
  if (createDateString) {
    filter = {
      ...filter,
      writer: {
        createDateString: createDateString
      }
    }  
  }

  FreeSchema.findByFilter(filter)
  .then((posts) => {
    myLogger(`[SUCCESS] : POST LIST FIND SUCCESS`);
    res.status(200).send({
      code: 200,
      message: "게시글 조회에 성공하였습니다.",
      posts: posts
    });

    return true;
  })
  .catch((e) => {
    myLogger(`POST FIND ERROR > ${e}`);
    res.status(200).send({
      code: 500,
      message: "게시글 조회 중 서버 오류가 발생하였습니다. 잠시 후 다시 시도해주세요."
    });

    return false;
  })
});


/*
*    게시글 조회
*    TYPE : GET
*    URI : /api/board/free/find/:seq
*    RETURN CODES:
*        200: 성공
*        500: 서버 오류
*/
router.get('/find/:seq', (req, res) => {
  const seq = req.params.seq;

  FreeSchema.findOneBySeq(seq)
  .then((post) => {
    myLogger(`[SUCCESS] : POST FIND SUCCESS`);
    res.status(200).send({
      code: 200,
      message: "게시글 조회에 성공하였습니다.",
      post: post
    });

    return true;
  })
  .catch((e) => {
    myLogger(`POST FIND ERROR > ${e}`);
    res.status(200).send({
      code: 500,
      message: "게시글 조회 중 서버 오류가 발생하였습니다. 잠시 후 다시 시도해주세요."
    });

    return false;
  })
});

module.exports = router;