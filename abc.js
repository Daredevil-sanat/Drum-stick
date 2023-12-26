const inventors = [
    {firstname:'Albert', lastName:'Einstein',year:1879,passed:1955},
    {firstname:'Albert', lastName:'Einstein',year:1779,passed:1855},
    {firstname:'Albert', lastName:'Einstein',year:1679,passed:1755}
];
const a = inventors.reduce((a,b)=>{
    return (a.passed-a.year)+(b.passed-b.year);
});
console.log(a);
console.log(inventors);