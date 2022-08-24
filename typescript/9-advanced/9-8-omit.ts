{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, "url" | "data">; // Pick 과 반대로, 원하는 것을 빼버리는 기능!
  // Video 내에 없는 타입도 Omit으로 빼줄 후보로 넣어줄 수 있음 !!

  function getVideO(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  } // Video의 모든 정보들을 다 return 하는 것

  function getVideOMetadata(id: string): VideoMetadata {
    return {
      // url과 data를 빼겠다고 했기 때문에 그 정보들이 들어오면 에러 표시 뜸
      id: id,
      title: "title",
    };
  }
}

// 선택할 것이 더 적으면 Pick, 뺄 것이 더 적으면 Omit 사용하면 됨
