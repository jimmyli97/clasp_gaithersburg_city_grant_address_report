function testReadQuery() {
  rng = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Needs Autocorrect").getRange("A2:B2");
  console.log(rng.getFormula())

   rng = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DB").getRange("A2");
  rng.setValue("test")
}
