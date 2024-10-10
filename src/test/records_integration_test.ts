// All imports should be ignored by Apps Script
import { Autocorrect } from "../autocorrect";

// Apps Script functions show up as unused locally
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function publicTest2() {
  let x =1
  console.log(Autocorrect.sum(1, 2))
}