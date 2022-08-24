{
  type SuccessState = {
    result: "success";
  };
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout"; // error handling 쉽도록 실패 이유로 예상할 수 있는 상황 적어두기
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {}
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // login ..
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
        // 캐치하는 error 는 type이 any이기 때문에 정말 필요할 때 말고는 사용 X 권장
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();

  // login() 안에서 error catch 하는 것 보다, run() 안에서 error catch 하는 것이 더 우 아 함
  // 이유 ? login() 안에서는 error catch 하고 난 이후 쓸만한 동작이 없음
}
