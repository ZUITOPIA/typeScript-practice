{
  /**
   * Union Types: OR
   * 타입스크립트에서 활용도가 높음
   */

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16; // 위에서 정의해준 TileSize의 8, 16, 32 중 하나만 할당 가능

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state)
  // success -> body "축하이모티콘"
  // fail -> reason "슬픈이모티콘"

  function printLoginState(state: LoginState): void {
    if ("response" in state) {
      console.log(`축하합니다 ${state.response.body}`);
    } else {
      console.log(`안타깝습니다 ${state.reason}`);
    }
  }
  // :void는 생략가능
}
