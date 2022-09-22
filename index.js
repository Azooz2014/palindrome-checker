function palindrome(str) {
  const regex = /[^a-zA-Z0-9]+/g;

  const modifiedStr = str
    .replace(regex, "")
    .split("")
    .reverse()
    .join("")
    .toLowerCase();

  const originalStr = str.replace(regex, "").toLowerCase();

  return modifiedStr === originalStr ? true : false;
}

palindrome("eye");
