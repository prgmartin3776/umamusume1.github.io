"use strict";

const quiz = [
  {
    question: "第1問：上の画像は以下のうちのどのキャラでしょう？",
    answer: [
      "トウカイテイオー", 
      "シンボリルドルフ", 
      "ナイスネイチャ", 
      "グラスワンダー"
    ],
    correct: "シンボリルドルフ",
    picture: "シンボリルドルフ.jpg"
  }, {
    question: "第2問：上の画像は以下のうちのどのキャラでしょう？",
    answer: [
      "ナリタタイシン", 
      "メジロマックイーン", 
      "メジロライアン", 
      "エアグルーヴ"
    ],
    correct: "メジロマックイーン",
    picture: "メジロマックイーン.png"
  }, {
    question: "第3問：上の画像は以下のうちのどのキャラでしょう？",
    answer: [
      "オグリキャップ", 
      "スペシャルウィーク", 
      "エルコンドルパサー", 
      "ダイワスカーレット"
    ],
    correct: "エルコンドルパサー",
    picture: "エルコンドルパサー.png"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

// クイズの問題文と選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
    document.getElementById("picture").src = quiz[quizIndex].picture
    document.getElementById("picture").animate([
      // keyframes
      { opacity: 0 },
      { opacity: 1 }
    ], {
      // timing options
      duration: 1000,
      fill: "forwards"
    });
    buttonIndex++;
  }
}

setupQuiz();

const clickHndler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("さすがはウマ娘オタク！！正解です！！")
  score++;
  } else {
    window.alert("不正解！まだまだだな…ライブに行く資格ないぞ！笑")
  }

  quizIndex++;

  if (quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもうなければ終了
    window.alert("終了！あなたの正解数は" + score + "/" + quizIndex + "です！");
  }
}

let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHndler(e);
    });
  handlerIndex++;
};