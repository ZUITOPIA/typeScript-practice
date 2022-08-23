type Video = {
  title: string;
  author: string;
  description: string;
};

type VideoOptional = {
  title?: string;
  author?: string;
  description?: string;
};

type VideoReadOnly = {
  readonly title: string;
  readonly author: string;
  readonly description: string;
};

// 위의 예시 : 매번 새로운 타입을 만들때마다 복붙해주어야하고 새로 만들어야 하는 번거로움이 있는 상황
// 이를 해결해주는 mapped type !! 알아보기
