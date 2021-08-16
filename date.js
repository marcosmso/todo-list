//jshint esversion:6

exports.getDate = function (){

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return new Date().toLocaleDateString("en-US", options);

}

exports.getDay = function (){

    const options = {
        weekday: "long"
    };

    return new Date().toLocaleDateString("en-US", options);
}

// module.exports.getDate = function (){

//     let options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     };

//     return new Date().toLocaleDateString("en-US", options);

// }

// module.exports.getDay = function (){

//     let options = {
//         weekday: "long"
//     };

//     return new Date().toLocaleDateString("en-US", options);
// }

// function getDate(){

//     let options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     };

//     return new Date().toLocaleDateString("en-US", options);

// }

// function getDay(){

//     let options = {
//         weekday: "long"
//     };

//     return new Date().toLocaleDateString("en-US", options);
// }
