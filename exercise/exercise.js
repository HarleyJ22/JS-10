const order = {
    customer: {
    address: {
    city:"Manfredonia"
    },
  },
};

let doescityexist = order.customer.address?.city;
if(!doescityexist){
  console.log ("City is required!");}
  else{
    console.log("Registered Successfully!")
  }