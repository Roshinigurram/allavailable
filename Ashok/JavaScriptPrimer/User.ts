interface UserDetails {
    id:number,
    name:string
};
let Details:UserDetails={
    id:13,
    name:"jsdbxkas"
};
function DisplayDetails(det:UserDetails) {
    console.log(det.id + "  " +det.name);
    
}
DisplayDetails(Details);
