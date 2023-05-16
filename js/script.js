// Copyright (c) 2023 Alyssia fung All rights reserved
//
// Created by: Alyssia fung
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  // This function divides two numbers

  // input
  const number1 = parseInt(document.getElementById("number1").value)
  const number2 = parseInt(document.getElementById("number2").value)

  // process
  let counter = 0
  let answer = 0
  let remainder = number1
  while (remainder >= number2) {
    remainder -= number2
    counter++
  }
  answer = counter

  // output
  document.getElementById("numberEntered").innerHTML =
    number1 + " / " + number2 + " = " + answer + " R:" + remainder
}
