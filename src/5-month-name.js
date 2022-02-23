const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  console.log(monthNumber-1)
  if (monthNumber < 1) {
    return null
  } else if (monthNumber > 12) {
    return null
  } else {
    return months[monthNumber-1]
  }
}
