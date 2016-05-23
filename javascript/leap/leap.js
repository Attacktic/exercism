module.exports = function Year(year){
    this.year = year;
    this.isLeap= function(year){
      return (((this.year % 4 === 0) && (this.year % 100 !== 0)) || ((this.year % 4 === 0) && (this.year % 100 === 0) && (this.year % 400 === 0)))
    }
}
