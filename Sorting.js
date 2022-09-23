// bubble sort success
let count = 1;
while (count > 0) {
  count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
      count++;
      console.log(arr[i], arr[i + 1]);
    }
  }
}
console.log(arr);

// selection sort success
for (i = 0; i < arr.length; i++) {
  let min = arr[i];
  let minidx = i;
  for (j = i + 1; j < arr.length; j++) {
    if (min > arr[j]) {
      min = arr[j];
      minidx = j;
    }
  }
  let temp = arr[i];
  arr[i] = min;
  arr[minidx] = temp;
  console.log(arr);
}
console.log(arr);

// insertion sort success
for (let i = 1; i < arr.length; i++) {
  let lifted = arr[i];
  let count = 0;
  let idx = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (lifted < arr[j]) {
      arr[j + 1] = arr[j];
      count++;
      idx = j;
    } else {
      break;
    }
  }
  if (count > 0) {
    arr[idx] = lifted;
  }
  console.log(arr);
}
console.log(arr);
