{
  /**
   * Type Aliases
   */

  type Text = string;
  const name: Text = "zuitopia";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "zuitopia",
    age: 23,
  };

  /**
   * String Literal Types
   */

  type Name = "name";
  let zuName: Name;
  zuName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}
