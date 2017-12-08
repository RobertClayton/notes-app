var assert = {
  isTrue: function(description, assertionToCheck) {
    if (!assertionToCheck) {
      console.log(`%c TEST FAILED: ${description}`, 'background: #ffd1d5; color: #c40013');
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log(`%c TEST PASSED: ${description}`, 'background: #d1d1d1; color: #008914');
    }
  }
};
