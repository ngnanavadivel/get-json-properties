// Sample Input JSON whose properties are to be listed.
toBeParsed = {
  "_id": 'ObjectId("57c51172e92aa5e5cafa264d")',
  "address": {
    "building": "1007",
    "coord": [-73.856077,
      40.848447
    ],
    "neighbours":[
    	{name: 'Shreenidhy', carsTheyOwn:['Tata Indica v2', 'BMW x64']},
      	{name: 'Roshan', carsTheyOwn:['Maruthi Alto k10', 'Mercedes Benz c350i']}
    ],
    "street": "Morris Park Ave",
    "zipcode": "10462"
  },
  "borough": "Bronx",
  "cuisine": "Bakery",
  "grades": [{
    "date": 'ISODate("2014-03-03T00:00:00Z")',
    "grade": "A",
    "score": 2
  }, {
    "date": 'ISODate("2013-09-11T00:00:00Z")',
    "grade": "A",
    "score": 6
  }, {
    "date": 'ISODate("2013-01-24T00:00:00Z")',
    "grade": "A",
    "score": 10
  }, {
    "date": 'ISODate("2011-11-23T00:00:00Z")',
    "grade": "A",
    "score": 9
  }],
  "name": "Morris Park Bake Shop",
  "restaurant_id": "30075445"
};

//-------------------------Javascript Code--------------------------------------

/* Entry Point */
function getPropertyNames(jsonObject) {
  var properties = [];
  getProperties(jsonObject, properties, null, false, 1);
  return properties;
}

/* Recursive Implementation */
function getProperties(jsonValue, properties, parentProperty, isParentTypeArray, recursionLevel) {
  console.log('[Inputs] : parentProperty -> ' + parentProperty + ', ' + 'isParentTypeArray -> ' + isParentTypeArray + ', recursionLevel -> ' + recursionLevel);
  for (prop in jsonValue) {
    console.log('1. checking variable -> ' + prop);
    var value = jsonValue[prop];
    printType(value);
    if (isArray(value) || isComposite(value)) {
      var newParentProperty = parentProperty;
      if (!isParentTypeArray) {
        newParentProperty = (parentProperty === null) ? prop : parentProperty + '.' + prop;
      }
      var newIsParentTypeArray = isArray(value);

      getProperties(value, properties, newParentProperty, newIsParentTypeArray, recursionLevel + 1);
    } else {
      var newPropName = ((parentProperty == null) ? prop : (isParentTypeArray ? parentProperty : (parentProperty + '.' + prop)));

      if (properties.indexOf(newPropName) == -1) {
        console.log('3.' + printSpacing(60, '-') + ' Pushing property -> ' + newPropName);
        properties.push(newPropName);
      } else {
        console.log('4. ' + newPropName + ' is already added. Hence ignored. !!!');
      }
    }
  }
}

/* Helper Utils */


function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

function isComposite(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

function printType(value) {
  console.log('2. Value is ' + (isArray(value) ? 'an ARRAY' : (isComposite(value) ? 'an OBJECT' : 'a SIMPLE type.')));
}

function printSpacing(count, symbol) {
  var line = symbol;
  while (count-- >= 1) {
    line = line + symbol;
  }
  return line;
}

//--------------------------------------------------End of Implmentation----------------------------------
/* Test it! */
alert(getPropertyNames(toBeParsed));

/* Sample Output */
/*
[Inputs] : parentProperty -> null, isParentTypeArray -> false, recursionLevel -> 1
 1. checking variable -> _id
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> _id
 1. checking variable -> address
 2. Value is an OBJECT
 [Inputs] : parentProperty -> address, isParentTypeArray -> false, recursionLevel -> 2
 1. checking variable -> building
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> address.building
 1. checking variable -> coord
 2. Value is an ARRAY
 [Inputs] : parentProperty -> address.coord, isParentTypeArray -> true, recursionLevel -> 3
 1. checking variable -> 0
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> address.coord
 1. checking variable -> 1
 2. Value is a SIMPLE type.
 4. address.coord is already added. Hence ignored. !!!
 1. checking variable -> neighbours
 2. Value is an ARRAY
 [Inputs] : parentProperty -> address.neighbours, isParentTypeArray -> true, recursionLevel -> 3
 1. checking variable -> 0
 2. Value is an OBJECT
 [Inputs] : parentProperty -> address.neighbours, isParentTypeArray -> false, recursionLevel -> 4
 1. checking variable -> name
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> address.neighbours.name
 1. checking variable -> carsTheyOwn
 2. Value is an ARRAY
 [Inputs] : parentProperty -> address.neighbours.carsTheyOwn, isParentTypeArray -> true, recursionLevel -> 5
 1. checking variable -> 0
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> address.neighbours.carsTheyOwn
 1. checking variable -> 1
 2. Value is a SIMPLE type.
 4. address.neighbours.carsTheyOwn is already added. Hence ignored. !!!
 1. checking variable -> 1
 2. Value is an OBJECT
 [Inputs] : parentProperty -> address.neighbours, isParentTypeArray -> false, recursionLevel -> 4
 1. checking variable -> name
 2. Value is a SIMPLE type.
 4. address.neighbours.name is already added. Hence ignored. !!!
 1. checking variable -> carsTheyOwn
 2. Value is an ARRAY
 [Inputs] : parentProperty -> address.neighbours.carsTheyOwn, isParentTypeArray -> true, recursionLevel -> 5
 1. checking variable -> 0
 2. Value is a SIMPLE type.
 4. address.neighbours.carsTheyOwn is already added. Hence ignored. !!!
 1. checking variable -> 1
 2. Value is a SIMPLE type.
 4. address.neighbours.carsTheyOwn is already added. Hence ignored. !!!
 1. checking variable -> street
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> address.street
 1. checking variable -> zipcode
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> address.zipcode
 1. checking variable -> borough
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> borough
 1. checking variable -> cuisine
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> cuisine
 1. checking variable -> grades
 2. Value is an ARRAY
 [Inputs] : parentProperty -> grades, isParentTypeArray -> true, recursionLevel -> 2
 1. checking variable -> 0
 2. Value is an OBJECT
 [Inputs] : parentProperty -> grades, isParentTypeArray -> false, recursionLevel -> 3
 1. checking variable -> date
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> grades.date
 1. checking variable -> grade
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> grades.grade
 1. checking variable -> score
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> grades.score
 1. checking variable -> 1
 2. Value is an OBJECT
 [Inputs] : parentProperty -> grades, isParentTypeArray -> false, recursionLevel -> 3
 1. checking variable -> date
 2. Value is a SIMPLE type.
 4. grades.date is already added. Hence ignored. !!!
 1. checking variable -> grade
 2. Value is a SIMPLE type.
 4. grades.grade is already added. Hence ignored. !!!
 1. checking variable -> score
 2. Value is a SIMPLE type.
 4. grades.score is already added. Hence ignored. !!!
 1. checking variable -> 2
 2. Value is an OBJECT
 [Inputs] : parentProperty -> grades, isParentTypeArray -> false, recursionLevel -> 3
 1. checking variable -> date
 2. Value is a SIMPLE type.
 4. grades.date is already added. Hence ignored. !!!
 1. checking variable -> grade
 2. Value is a SIMPLE type.
 4. grades.grade is already added. Hence ignored. !!!
 1. checking variable -> score
 2. Value is a SIMPLE type.
 4. grades.score is already added. Hence ignored. !!!
 1. checking variable -> 3
 2. Value is an OBJECT
 [Inputs] : parentProperty -> grades, isParentTypeArray -> false, recursionLevel -> 3
 1. checking variable -> date
 2. Value is a SIMPLE type.
 4. grades.date is already added. Hence ignored. !!!
 1. checking variable -> grade
 2. Value is a SIMPLE type.
 4. grades.grade is already added. Hence ignored. !!!
 1. checking variable -> score
 2. Value is a SIMPLE type.
 4. grades.score is already added. Hence ignored. !!!
 1. checking variable -> name
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> name
 1. checking variable -> restaurant_id
 2. Value is a SIMPLE type.
 3.------------------------------------------------------------- Pushing property -> restaurant_id
*/
