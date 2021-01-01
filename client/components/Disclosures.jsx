import React from "react";

/**
 * Disclosure
 *
 * Expects an array and prints a message letting people know who
 *  sponsored the work.
 *
 * @param {array} sponsors - array of sponsor names
 */

export const Disclosure = ({ sponsors }) => {
  return <>This work was paid for and sponsored by {sponsors}.</>;
};
