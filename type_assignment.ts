interface complexObject{
    name: string,
    age: number,
    isStudent:boolean,
    interests: string[],
    address: address,
    grades: grades,
    contact: contact,
    tuple: [number,string,boolean],
    functionExample(x:number):number
}
interface address{
    street: string,
    city: string,
    postalCode: string,
}
interface subject{
    midterm: number,
    final: number,
}
interface grades{
    math: subject,
    science: subject,
}
interface contact{
    email: string,
    phone: string,
}
const complexObject: complexObject= {
  name: "John Doe",
  age: 30,
  isStudent: false,
  interests: ["programming", "music", "hiking"],
  address: {
    street: "123 Main St",
    city: "Exampleville",
    postalCode: "12345",
  },
  grades: {
    math: {
      midterm: 85,
      final: 92,
    },
    science: {
      midterm: 78,
      final: 88,
    },
  },
  contact: {
    email: "john.doe@example.com",
    phone: "+1234567890",
  },
  tuple: [1, "two", true],
  functionExample: function (x) {
    return x * 2;
  },
};