import React, { useState } from 'react';
import './App.css';

function App() {
  let [ dramaRec, changeDramaRec ] = useState(['드라마, ', '영화, ']);
  // useState(); 함수가 실행되고 나면 [,] array가 남음.
  // array의 첫번째 자리 : 진짜 데이터
  // array의 두번째 자리 : 진짜 데이터를 수정하기 위한 함수.
  let [ goodNumber_1, changeGoodNumber_1 ] = useState(0); // useState 따로 지정 방법 공부하기
  let [ goodNumber_2, changeGoodNumber_2 ] = useState(0);
  let [ goodNumber_3, changeGoodNumber_3 ] = useState(0);
  let [ goodNumber_4, changeGoodNumber_4 ] = useState(0);

  return (
    <div className="App">
      <div className="Header">
        <div>ZUITOPIA</div>
      </div>

      <div className="ArticleList">
         <h3>
           { dramaRec[0] + "스물다섯 스물하나 "}
           <span className="Good" onClick={() => {changeGoodNumber_1(goodNumber_1+1)}}>  👍🏻  </span>
           { goodNumber_1 }
         </h3>
         <p>2022.05.12</p>
         <hr/>
      </div>

      <div className="Show">
        <h2> 스물다섯 스물하나 </h2>
        <p>2022.02.12 ~ 2022.04.03</p>
        <img className="PosterImage" src="image/poster_fiveone.jpeg"></img>
        <p>작품 소개<br /><br />
" 1998년, 세상이 통째로 흔들리듯 불안하던 해, 스물둘과 열여덟이 만났다. 둘은 서로의 이름을 처음 불렀다.<br />
스물셋과 열아홉이 되었고, 둘은 의지했다. 스물넷과 스물이 되었고, 둘은 상처를 냈다. 스물다섯 스물하나가 됐을 때, 둘은 사랑했다. "<br />
        </p>
      </div>

      <div className="ArticleList">
         <h3>
           { dramaRec[0] + "도시남녀의 사랑법" }
           <span className="Good" onClick={() => {changeGoodNumber_2(goodNumber_2 +1)}}>  👍🏻  </span>
           { goodNumber_2 }
         </h3>
         <p>2021.2.24</p>
         <hr/>
      </div>

      <div className="Show">
        <h2> 도시남녀의 사랑법 </h2>
        <p>2020.12.22 ~ 2021.02.16</p>
        <img className="PosterImage" src="image/poster_city.jpeg"></img>
        <p>작품 소개<br /><br />
        " 복잡한 도시 속 내 안에 또 다른 나를 품고 치열하게 살아가는 청춘들의 리얼 연애담을 담은 카카오TV 오리지널 드라마 "</p>
      </div>

      <div className="ArticleList">
         <h3>
           { dramaRec[0] + "악의 꽃 " }
           <span className="Good" onClick={() => {changeGoodNumber_3(goodNumber_3 +1)}}>  👍🏻  </span>
           { goodNumber_3 }
         </h3>
         <p>2020.10.03</p>
         <hr/>
      </div>

      <div className="ArticleList">
         <h3>
           { dramaRec[1] + "독전 "}
           <span className="Good" onClick={() => {changeGoodNumber_4(goodNumber_4 +1)}}>  👍🏻  </span>
           { goodNumber_4 }
         </h3>
         <p>2018.05.22</p>
         <hr/>
      </div>

    </div>
  )
}


// <div>가 여러개로 복잡할 때 하나의 컴포넌트로 묶어서 따로 빼냄. 사용하기에도 쉬워짐. 컴포넌트의 시작은 대문자.
// 컴포넌트 많이 만들면 state 사용할 때 복잡해짐

export default App;
