var text01 = `
It is like this, this island is his!
`

var regex01 = /\bis\b/g

const loop = (targetText, reg) => {
  while((result = reg.exec(targetText)) !== null) {
    console.log(result)
  }
}
console.log('\nregex01:')
loop(text01, regex01)

