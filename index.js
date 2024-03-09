// Write your solution in this file!
const employee= {};

/* 1)updateEmployeeWithKeyAndValue(employee, key, value)
      ✓ returns an employee with the original key value pairs and the new key value pair
      ✓ it does not modify the original employee, but rather returns a clone with the new data */
function updateEmployeeWithKeyAndValue(obj,key,value){
   const newObj = {...obj};
   newObj[key]=value;
   return newObj;
   }

/* destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
      ✓ updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee */
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
   obj[key] = value;
   return obj;
};
/* deleteFromEmployeeByKey(employee, key)
         deletes `key` from a clone of employee and returns the new employee (it is non-destructive) */
function deleteFromEmployeeByKey(obj, key){
   const newObj = {...obj};
   delete newObj[key];
   return newObj;
   }
/* destructivelyDeleteFromEmployeeByKey(employee, key)
      ✓ returns employee without the deleted key/value pair
      ✓ modifies the original employee */
function destructivelyDeleteFromEmployeeByKey(obj, key){   
   delete obj[key];
   return obj;
}