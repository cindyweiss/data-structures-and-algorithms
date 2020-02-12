const myFirstTest = require('./array-shift.js')





it('should insert new value into middle of array', () => {
  let array = [1, 2, 3, 4]
  let newArray = insertShiftArray(arr, 5)
  expect(newArray).toEqual([1, 2, 5, 3, 4])
})