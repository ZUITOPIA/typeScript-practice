{
  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function loginPlus(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state)
  // success -> body "축하이모티콘"
  // fail -> reason "슬픈이모티콘"

  function printLoginStatePlus(state: LoginState): void {
    if (state.result === "success") {
      console.log(`축하합니다 ${state.response.body}`);
    } else {
      console.log(`안타깝습니다 ${state.reason}`);
    }
  }
}
