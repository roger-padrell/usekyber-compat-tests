import * as kyb from "@usekyber/ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("TypeScript comp test", async () => {
  let preset_kyb: string = await Deno.readTextFile("preset_kyber.txt");
  let preset_message: string = await Deno.readTextFile("preset_message.txt");

// Creates a kyber object with random keys and public tables
let k: kyb.Kyber = kyb.importFullKyber(preset_kyb);
let m: kyb.Message = kyb.importMessage(preset_message);

let d = kyb.recieveString(k, m);

assertEquals(d, "test")
})