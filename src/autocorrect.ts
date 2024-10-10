export namespace Autocorrect {
  function testReadQuery() {
    let rng = SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName("Needs Autocorrect")
      ?.getRange("A2:B2");
    console.log(rng?.getFormula());

    rng = SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName("DB")
      ?.getRange("A2");

    console.log(Autocorrect.sum(1, 2));
  }

  export function sum(a: number, b: number) {
    return a + b;
  }
}

function publicTest() {
  let x = 1;
  console.log(Autocorrect.sum(1, 2));
}
