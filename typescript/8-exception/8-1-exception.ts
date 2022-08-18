// error : expected
// exception : unexpected

// Java : Exception class 존재
// JavaScript : Error class 존재

// Error(exception) Handling :  try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist") {
    throw new Error(`file not exist ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {}

// const fileName = "file"; // 파일이 존재하는 경우
// console.log(readFile(fileName)); // file contents 출력하기
// closeFile(fileName); // 파일 닫기

function run() {
  const fileName = "file not exist";
  try {
    // 에러가 발생하는 부분만 try로 감싸기
    console.log(readFile(fileName));
  } catch (error) {
    console.log("catched!!"); // 에러 캐치하면 프로그램이 죽진 않음 -> 뒷처리 가능
  } finally {
    // 에러 try, catch와 관련없이 항상 실행
    // catch 안에서 문제가 생기거나 return 값이 있더라도 꼭 실행되어야 하는 것들 담기
    closeFile(fileName);
    console.log("finally");
  }
}

run();
