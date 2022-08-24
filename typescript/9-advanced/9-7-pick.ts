{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  } // Video의 모든 정보들을 다 return 하는 것

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      // id와 title만 가지겠다고 했기 때문에 다른 정보가 들어오면 에러 표시 뜸
      id: id,
      title: "title",
    };
  }
}
